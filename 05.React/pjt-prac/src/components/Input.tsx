import React, { useState, ChangeEvent, FormEvent } from 'react';
import SigninAlert from './SignupAlert';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { userInfoActions } from '../store/userInfo';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

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
    gender?: string;
    birthday?: string;
    region?: string;
    position?: string;
    genre?: string;
    phoneNumber?: string;
    profileImage?: File | string | null;
}

const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const phoneRule = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

const Input: React.FC<InputProps> = ({ formType }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [ formData, setFormData ] = useState<FormData>({
        userId: '',
        confirmNumber: '',
        password: '',
        confirmPassword: '',
        userName: '',
        nickname: '',
        gender: '',
        birthday: '',
        region: '',
        position: '',
        genre: '', 
        phoneNumber: '',
        profileImage: 'public/avatar.png'
    });

    const [ notices, setNotices ] = useState<Record<string, string>>({});
    const [ verifyBtn, setVerifyBtn ] = useState<boolean>(false);
    const [ verifyNumber, setVertifyNumber ] = useState<boolean>(false);
    const [ submitSignup, setSubmitSignup ] = useState<boolean>(false)
    const [ previewImage, setPreviewImage ] = useState<string | null>(null);
    const [ openAlert, setOpenAlert ] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;

        if (name === 'profileImage' && files) {
            const file = files[0];
            setFormData((prevFormData) => ({...prevFormData, profileImage: file}));
            const previewUrl = URL.createObjectURL(file);
            setPreviewImage(previewUrl);
        } else {
            setFormData((prevFormData) => ({ ...prevFormData, [name]: value}));

            if (name === 'userId') {
                setVerifyBtn(exptext.test(value));
            }
        }
        
        setNotices((prevNotices) => ({
            ...prevNotices,
            [name]: ''
        }));
    };
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        let noticeMessage = '';
        
        if (name === 'userId') {
            if (!exptext.test(value)) {
                noticeMessage = '올바른 이메일 형식을 입력해주세요.'
            } else {
                setVerifyBtn(true)
            }
        } else if (name === 'password' && (value.length < 8 || 16 < value.length)) {
            noticeMessage = '비밀번호는 8-16글자 사이로 입력해주세요.'
        } else if (name === 'confirmPassword') {
            if (value !== formData.password) {
                noticeMessage = '비밀번호가 일치하지 않습니다.'
            } else {
                noticeMessage = '비밀번호가 일치합니다.'
            }
        } else if (name === 'userName') {
            if (2 <= value.length && value.length <= 10) {
                noticeMessage = '확인되었습니다.'
            } else {
                noticeMessage = '다시 한 번 확인해주세요.'
            }
        } else if (name === 'nickname') {
            if (1 <= value.length && value.length <= 20) {
                noticeMessage = '확인되었습니다.'
            } else {
                noticeMessage = '다시 한 번 확인해주세요.'
            }
        } else if (name === 'phoneNumber' && !phoneRule.test(value)) {
            noticeMessage = '올바른 번호 형식을 입력해주세요.'
        }
        
        setNotices ((prevNotices) => ({
            ...prevNotices,
            [name]: noticeMessage
        }));
    };

    const sendVerifyNumber = async () => {
        // 인증 이메일 전송하는 코드 짜기
        // try {
        //     const response = await axios.post(
        //         // 서버 고치기
        //         // '/api/auth/email',
        //         {'email' : formData.userId}
        //     )
        //     console.log(response.data)

        // } catch(error) {
        //     console.error(error)
        // }

        setVertifyNumber(true);

    }

    const checkverifyNumber = () => {
        // 인증 번호랑
        setSubmitSignup(true)
    }

    const handleSignup = async () => {
        // 확인용
                setOpenAlert(true);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
                setOpenAlert(false);
                console.log('formData:', formData)
                // try {
                    //     // API_URL 바꾸기
                    //     const response = await axios.post(`${API_URL}/api/auth/in`, {
                        //         // 뭐를 보내야할까
                        //     });
                        //     if (response.status === 200) {
                            //         console.log('로그인 성공')
                            //     }
                            // setOpenAlert(true);
                            // setTimeout(() => {
                                //     navigate('/');
                                // }, 2000);
                                // setOpenAlert(false);
                                
                                // } catch (error) {
                                    //     console.error(error)
                                    // }
                                }
                                
                                const handleLogin = async () => {
                                    // 확인용
                                    setOpenAlert(true);
                                    setTimeout(() => {
                  navigate('/');
                }, 2000);
              setOpenAlert(false);

            //   try {
            //     const response = await axios.post(
            //         `${API_URL}/api/auth/signin`,
            //         {
            //             뭘 보내야할까
            //         },
            //         {
            //             headers: {

            //             }
            //         },
            //     );
            //     if (response.status === 200) {
            //         const token = response.headers['access'];
            //         if (token) {
            //           await AsyncStorage.setItem('jwt_token', token);
            
            //           const payload = token.substring(
            //             token.indexOf('.') + 1,
            //             token.lastIndexOf('.'),
            //           );
            //   } catch(error) {
            //     console.error(error)
            //   }
     }
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        const formDataToSubmit = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value) formDataToSubmit.append(key, value instanceof File ? value : String(value));
        })
        
        if (formType === 'sign') {
            // 이때 백한테 회원가입 정보 보내기
            handleSignup()
        } else if (formType === 'login') {
            // 이때 백한테 로그인 정보 보내기
            handleLogin()
            // response 오면 리덕스에 저장
            // dispatch(userInfoActions.setNickname(formData.nickname || ''));
            // dispatch(userInfoActions.setUserId(formData.userId));
            // dispatch(userInfoActions.setProflileImage(previewUrl));
            
            console.log('리덕스에 닉네임, 아이디 저장')
        }
    };

    const inputFields = formType === 'sign'
        ? [
            {label: '아이디', type: 'email', name: 'userId'},
            {label: '인증 번호 입력', type: 'text', name: 'confirmNumber'},
            {label: '비밀번호', type: 'text', name: 'password'},
            {label: '비밀번호 확인', type: 'text', name: 'confirmPassword'},
            {label: '이름', type: 'text', name: 'userName'},
            {label: '별명', type: 'text', name: 'nickname'},
            {label: '성별', type: 'select', name: 'gender', options: ['남성', '여성', '기타']},
            {label: '생년월일', type: 'date', name: 'birthday'},
            {label: '지역', type: 'select', name: 'region', options: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '제주', '경기도 남부', '경기도 북부', '강원도 남부', '강원도 북부', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도']},
            {label: '포지션', type: 'select', name: 'position', options: ['보컬', '기타', '베이스', '키보드', '드럼']},
            {label: '장르', type: 'select', name: 'genre', options: ['락발라드', '락']},
            {label: '전화번호', type: 'text', name: 'phoneNumber'},
            {label: '프로필 사진', type: 'file', name: 'profileImage'}
        ] 
        : [
            {label: '아이디', type: 'text', name: 'userId'},
            {label: '비밀번호', type: 'text', name: 'password'},
        ];
        return  (
            <div>
        {openAlert && <SigninAlert title={'회원가입 성공'} />}
        <form onSubmit={handleSubmit}>
            {inputFields.map((field, index) => (
                <div key={index}>
                    <label>{field.label}</label>
                    {field.type === 'select' ? (
                            <select
                                name={field.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={formData[field.name as keyof FormData] || ''}
                            >
                                <option value="">선택</option>
                                {field.options?.map((option, idx) => (
                                    <option key={idx} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        ) : (
                    <input
                        type={field.type}
                        name={field.name}
                        value={field.name !== 'profileImage' ? formData[field.name as keyof FormData] || '' : undefined}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={field.name === 'userId' ? 'abc@abc.com' : field.name === 'phoneNumber' ? '010-0000-0000' : ''}
                        accept={field.type === 'file' ? 'image/*' : undefined}
                    ></input>
                        )}
                    {notices[field.name] && <div style={{ color: 'red' }}>{notices[field.name]}</div>}
                    {field.name === 'userId' && formType === 'sign' ? <Button onClick={sendVerifyNumber} disabled={!verifyBtn}>인증 번호 전송</Button> : null}
                    {field.name === 'confirmNumber' && verifyNumber ? <Button onClick={checkverifyNumber}>인증</Button> : null}
                    {field.name === 'confirmNumber' && submitSignup ? '인증되었습니다.': null}
                </div>
            ))}
            <button type='submit'>
                {formType === 'sign' ? submitSignup  ? '회원가입' : '' : '로그인'}
            </button>
        </form>
    </div>
  );
};

export default Input;