import React from 'react';
import { Alert } from "@/components/ui/alert"

interface SigninAlertProps {
    title: string;
}

const SigninAlert: React.FC<SigninAlertProps> = ({ title }) => {
    console.log('오긴옴')
  return (
<Alert status="info" variant="solid" title={title} />
  );
};

export default SigninAlert;
