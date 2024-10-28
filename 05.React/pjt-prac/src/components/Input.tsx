import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoActions } from '../store/userInfo';

interface InputProps {
    formType: 'sign' | 'login';
}

interface FormData {
    userId: string;
    confirmNumber?: string;
    password: string;
    confirmPassword?: string;
    userName?: string;
    nickname?: string;
    phoneNumber?: string;
}

const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const phoneRule = /^(070|02|0[3-9]{1}[0-9]{1})[0-9]{3,4}[0-9]{4}$/;

const Input: React.FC<InputProps> = ({ formType }) => {
    const dispatch = useDispatch();
    
    const [ formData, setFormData ] = useState<FormData>({
        userId: '',
        confirmNumber: '',
        password: '',
        confirmPassword: '',
        userName: '',
        nickname: '',
        phoneNumber: '',
    });

    const [ notices, setNotices ] = useState<Record<string, string>>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value
        });

        setNotices((prevNotices) => ({
            ...prevNotices,
            [name]: ''
        }));
    };
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        let noticeMessage = '';

        // 인증 번호는 어떻게 확인하냐
        if (name === 'userId' && !exptext.test(value)) {
            noticeMessage = '올바른 이메일 형식을 입력해주세요.'
        } else if (name === 'password' && value.length < 8 || 16 < value.length) {
            noticeMessage = '비밀번호는 8-16글자 사이로 입력해주세요.'
        } else if (name === 'confirmPassword' && value !== formData.password) {
            noticeMessage = '비밀번호가 일치하지 않습니다.'
        } else if (name === 'phoneNumber' && !phoneRule.test(value)) {
            noticeMessage = '올바른 번호 형식을 입력해주세요.'
        }

        setNotices ((prevNotices) => ({
            ...prevNotices,
            [name]: noticeMessage
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (formType === 'sign') {
            // 이때 백한테 회원가입 정보 보내기
        } else if (formType === 'login') {
            // 이때 백한테 로그인 정보 보내기
            dispatch(userInfoActions.setNickname(formData.nickname || ''));
            dispatch(userInfoActions.setUserId(formData.userId));
        }
    };

    const inputFields = formType === 'sign'
        ? [
            {label: '아이디', type: 'text', name: 'userId'},
            {label: '인증 번호 입력', type: 'text', name: 'confirmNumber'},
            {label: '비밀번호', type: 'text', name: 'password'},
            {label: '비밀번호 확인', type: 'text', name: 'confirmPassword'},
            {label: '이름', type: 'text', name: 'userName'},
            {label: '별명', type: 'text', name: 'nickname'},
            {label: '전화번호', type: 'text', name: 'phoneNumber'},
        ] 
        : [
            {label: '아이디', type: 'text', name: 'userId'},
            {label: '비밀번호', type: 'text', name: 'password'},
        ];
  return  (
    <div>
        <form onSubmit={handleSubmit}>
            {inputFields.map((field, index) => (
                <div key={index}>
                    <label>{field.label}</label>
                    <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof FormData] || ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={field.name === 'userId' ? 'abc@abc.com' : field.name === 'phoneNumber' ? '010-0000-0000' : ''}
                    ></input>
                    {notices[field.name] && <div style={{ color: 'red' }}>{notices[field.name]}</div>}
                </div>
            ))}
            <button type='submit'>
                {formType === 'sign' ? '제출' : '로그인'}
            </button>
        </form>
    </div>
  );
};

export default Input;