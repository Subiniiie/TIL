import { Button } from '@chakra-ui/react';
import React, { ChangeEvent, FormEvent, useState } from 'react';

interface FormData {
    title: string;
    content: string;
    image: File | string | null;
}

const CreateArticleInput: React.FC = () => {
    const [ formData, setFormData ] = useState<FormData>({
        title: '',
        content: '',
        image: ''
    });

    const [ notices, setNotices ] = useState<Record<string, string>>({});
    const [ previewImage, setPreviewImage ] = useState<string | null>(null);

    const inputFields = [
        {label: '제목', type: 'text', name: 'title'},
        {label: '내용', type: 'text', name: 'content'},
        {label: '첨부 파일', type: 'file', name: 'image'},
    ]
 
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;

        if (name === 'image' && files) {
            const file = files[0];
            setFormData((prevFormData) => ({...prevFormData, image: file}));
            const previewUrl = URL.createObjectURL(file);
            setPreviewImage(previewUrl);
        } else {
            setFormData((prevFormData) => ({ ...prevFormData, [name]: value}));
        }

        setNotices((prevNotices) => ({
            ...prevNotices,
            [name]: ''
        }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        let noticeMessage = '';

        if (name === 'title' && value.length < 1) {
            noticeMessage = '제목은 1글자 이상 입력해주세요.'
        } else if (name === 'content' && value.length < 1) {
            noticeMessage = '내용은 1글자 이상 입력해주세요.'
        }

        setNotices((prevNotices) => ({
            ...prevNotices,
            [name]: noticeMessage
        }));
    };

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();

        const formDataToSubmit = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value) formDataToSubmit.append(key, value instanceof File ? value : String(value));
        })

        
    };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputFields.map((field, index) => (
            <div key={index}>
                <label>{field.label}</label>
                <input
                    type={field.type}
                    name={field.name}
                    value={field.name !== 'image' ? formData[field.name as keyof FormData] || '' : undefined}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={field.name === 'title' ? '제목을 입력해주세요.' : field.name === 'content' ? '내용을 입력해주세요' : ''}
                    accept={field.type === 'file' ? 'image/*' : undefined}
                ></input>
                {notices[field.name] && <div style={{ color: 'red' }}>{notices[field.name]}</div>}
            </div>
        ))}
        <Button type='submit'>작성하기</Button>
      </form>
    </div>
  );
};

export default CreateArticleInput;