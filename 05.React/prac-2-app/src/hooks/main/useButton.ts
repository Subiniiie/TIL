import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useButton = () => {
    const file_key = 'HWP7CkGCWcQEAKQrRUuTvA'
    const token = import.meta.env.VITE_FIGMA_API_KEY

    const [imageMap, setImageMap] = useState<{ [key: string]: string }>({});

    
        const getDownload = async () => {
            for (const [ key, value] of Object.entries(imageMap)) {
                console.log(key, value)

                const res = await fetch(value);
                const blob = await res.blob();
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `${key}.png`;
                link.click()
            }
            
        }


    const getFigmaApi = async () => {
        try {
            const response = await axios.get(
                `https://api.figma.com/v1/files/${file_key}/images`,
                {
                    headers: {
                        'X-Figma-Token' : token
                    }
                }
            )
            console.log('데이터 추출 성공 : ', response.data.meta.images)
            setImageMap(response.data.meta.images);
            getDownload()

        } catch(err) {
            console.error('실패 : ', err.response?.data || err.message)
        }



    };

    return {
        getFigmaApi
    }
};

export default useButton;