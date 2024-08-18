import { useRef, useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import styles from './LoginPage.module.scss';
import clsx from 'clsx';
import { Logo } from '../Logo';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUsed, setIsUsed] = useState(false);
  const [position, setPosition] = useState({ top: '0px', left: '0px' });
  const [isActive, setIsActive] = useState(false);
  const ripplesRef = useRef<HTMLDivElement | null>(null);

  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email, password }).catch(() => notify('Неправильные логин или пароль'));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsUsed(!!value);
  };

  const handleRipplesClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ripplesRef.current) {
      const offset = ripplesRef.current.getBoundingClientRect(); // Получаем положение элемента

      const x = e.clientX - offset.left; // Вычисляем x-координату относительно элемента
      const y = e.clientY - offset.top; // Вычисляем y-координату относительно элемента

      // Обновляем состояние с новыми координатами
      setPosition({ top: `${y}px`, left: `${x}px` });
      setIsActive(true); // Активируем анимацию
    }
  };

  const handleAnimationEnd = () => {
    setIsActive(false); // Убираем активность после завершения анимации
  };

  return (
    <main className={styles.root}>
      <div className={styles.card}>
        <Logo place='login' />
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.group}>
            <input
              className={clsx(styles.input, {
                [styles.inputTypeUsed]: isUsed,
              })}
              name='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlur}
            />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Email</label>
          </div>
          <div className={styles.group}>
            <input
              className={styles.input}
              name='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Пароль</label>
          </div>
          <button type='submit' className={clsx(styles.button, styles.buttonBlue)}>
            Войти
            <div
              className={clsx(styles.ripples, styles.buttonRipples, {
                [styles.ripplesIsActive]: isActive,
              })}
              onClick={handleRipplesClick}
              ref={ripplesRef} // Ссылка на элемент
            >
              <span
                className={styles.ripplesCircle}
                style={{ top: position.top, left: position.left, position: 'absolute' }} // Устанавливаем позицию круга
                onAnimationEnd={handleAnimationEnd}
              ></span>
            </div>
          </button>
        </form>
      </div>
    </main>
  );
};
