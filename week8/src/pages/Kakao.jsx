import KaKaoLogin from 'react-kakao-login';
import { useNavigate } from 'react-router-dom';

export default function KaKao() {
    const navigate = useNavigate();

    const loginSuccess = (res) => {
        console.log(`카카오 로그인 성공!`);
        const user = res.profile;
        console.log(user);
        navigate('/success', { state: { user } });
    };
    
    const loginFail = (error) => {
        console.log(`카카오 로그인 실패!`);
        console.error(error);
    };
      

    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
            <KaKaoLogin 
                token={process.env.REACT_APP_JS_KEY}
                onSuccess={(res) => loginSuccess(res)}
                onFailure={(res) => loginFail(res)}
                getProfile={true}
            />
        </div>
    );
}