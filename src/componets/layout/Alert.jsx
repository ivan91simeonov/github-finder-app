import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import './Alert.css'

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className='alert'>
        {alert.type === 'error' && (
          <p>
            <strong>{alert.msg}</strong>
          </p>
        )}
      </p>
    )
  );
}

export default Alert;
