
import React, { useCallback, useEffect, useMemo } from 'react';
import style from './Header.css';
import appStyle from '../../App.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Parser from 'html-react-parser';
import { useStore } from "../../sharedContexts/store";

const Header = () => {
  const {
    store: {
      accountAddress,
      haveNFT,
      isInWar,
      netId,
      mainNetId,
      loggedin: loggedIn,
      inProcess,
      web3,
    },
    connect,
    war,
    peace,
    mint,
    isConnected,
  } = useStore();

  //TODO: check how we can handle in a better way the connection
  useEffect(() => {
    isConnected()
  }, [])

  const navigate = useNavigate();

  const changeStatus = () => {
    if (!inProcess) {
      if (accountAddress && netId === mainNetId) {
        if (loggedIn) {
          //This is the actual Key to access DeFiWars Finance
          if (haveNFT) {
            if (isInWar) {
              //This means to unstake $DWARF
              peace();
              navigate('/NFA_Market', { replace: true });
            }
            else {
              //This means to stake $DWARF
              war();

              navigate('/NFA_Collections', { replace: true });
            }
          }
          else {
            mint();
            navigate('/Liquidity_Pools', { navigate: true });
          }
        }
        else {
          navigate('/login', { navigate: true });
        }
      }
      connect();
    }
  }

  let connectButton = 'Connect<br />Wallet';

  let menuitems = '';

  if (accountAddress) {
    connectButton = 'MINT my WAR <br />ngNFT';
    if (haveNFT && isInWar) {
      connectButton = 'MINT my PEACE <br />ngNFT';
    }

    if (haveNFT && !isInWar) {
      connectButton = 'Select PoLP <br />& Stake';
    }

    if (!haveNFT && !loggedIn) {
      connectButton = 'LOGIN';
    }

    if (netId !== mainNetId) {
      connectButton = 'Connect to <br /> BSC Mainnet';
    }

    if (inProcess) {
      connectButton = 'processing <br /> ...';
    }
  }

  if (isInWar) {
    menuitems = <Menu />
  }

  return (
    <header className={appStyle.flexauto}>
      <div className={style.logo}>
        <Link to='/'><img src='img/sword-logo.png' alt='Home' /></Link>
        <div className={style.connectWallet}>
          <a onClick={changeStatus}>
            {Parser(connectButton)}
          </a>

          <svg
            width='100'
            height='32'
            viewBox='0 0 260 91'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path id='line' d='' stroke='white'>
              <animate
                attributeName='d'
                dur='16s'
                values='M0 46H0L0.0 60; M0 46H220L212.584 40;  M0 46H220L212.584 40;  M0 46H0L0.0 60;'
                animation-direction='alternate'
                repeatCount='indefinite'
              />
            </path>
            <path
              d='M260 46.5C260 40.6562 258.849 34.8696 256.613 29.4706C254.376 24.0716 251.098 19.166 246.966 15.0337C242.834 10.9015 237.928 7.62369 232.529 5.38736C227.13 3.15103 221.344 2 215.5 2L215.5 6.06069C220.811 6.06069 226.069 7.10668 230.975 9.13895C235.882 11.1712 240.34 14.15 244.095 17.9051C247.85 21.6602 250.829 26.1182 252.861 31.0245C254.893 35.9309 255.939 41.1894 255.939 46.5H260Z'
              fill='white'
            />
            <path
              d='M212.585 2.09559C210.782 2.21397 208.988 2.44204 207.212 2.77856L207.969 6.7682C209.582 6.4624 211.212 6.25513 212.851 6.14756L212.585 2.09559Z'
              fill='white'
            />
            <path
              d='M204.455 3.39239C202.705 3.84086 200.984 4.39551 199.301 5.05327L200.779 8.83535C202.308 8.2376 203.873 7.73356 205.463 7.32602L204.455 3.39239Z'
              fill='white'
            />
            <path
              d='M197.12 5.97326C195.474 6.71958 193.876 7.56544 192.333 8.50612L194.447 11.9731C195.849 11.1183 197.302 10.3496 198.797 9.67139L197.12 5.97326Z'
              fill='white'
            />
            <path
              d='M189.891 10.1073C188.413 11.1472 187 12.2761 185.66 13.4877L188.383 16.5001C189.601 15.399 190.885 14.3732 192.228 13.4282L189.891 10.1073Z'
              fill='white'
            />
            <path
              d='M183.582 15.4924C182.323 16.7884 181.144 18.1599 180.051 19.5993L183.286 22.054C184.279 20.746 185.35 19.4996 186.494 18.3219L183.582 15.4924Z'
              fill='white'
            />
            <path
              d='M178.899 21.1898C177.871 22.676 176.935 24.2234 176.095 25.8234L179.691 27.7101C180.454 26.2561 181.305 24.85 182.239 23.4994L178.899 21.1898Z'
              fill='white'
            />
            <path
              d='M174.83 28.4379C174.097 30.0892 173.465 31.7837 172.938 33.5119L176.821 34.6971C177.301 33.1266 177.875 31.5867 178.542 30.0861L174.83 28.4379Z'
              fill='white'
            />
            <path
              d='M171.942 37.3916C171.572 39.1602 171.311 40.9498 171.158 42.7502L175.205 43.0924C175.343 41.4562 175.581 39.83 175.917 38.2227L171.942 37.3916Z'
              fill='white'
            />
            <path
              d='M171.081 49.176C171.189 50.9797 171.408 52.775 171.735 54.5521L175.728 53.8173C175.431 52.2024 175.233 50.5709 175.134 48.9318L171.081 49.176Z'
              fill='white'
            />
            <path
              d='M172.266 57.0387C172.694 58.7942 173.228 60.522 173.866 62.2125L177.665 60.7787C177.086 59.2424 176.6 57.6723 176.211 56.077L172.266 57.0387Z'
              fill='white'
            />
            <path
              d='M174.495 63.7863C175.197 65.4513 175.999 67.072 176.898 68.6394L180.421 66.6192C179.604 65.1948 178.874 63.722 178.237 62.2089L174.495 63.7863Z'
              fill='white'
            />
            <path
              d='M178.103 70.618C179.082 72.1365 180.153 73.594 181.309 74.9823L184.429 72.3832C183.378 71.1216 182.405 69.7972 181.515 68.4172L178.103 70.618Z'
              fill='white'
            />
            <path
              d='M183.355 77.2723C184.604 78.5775 185.932 79.8055 187.331 80.9492L189.901 77.8057C188.63 76.7663 187.424 75.6504 186.288 74.4643L183.355 77.2723Z'
              fill='white'
            />
            <path
              d='M189.21 82.4036C190.667 83.4711 192.189 84.4488 193.766 85.3313L195.749 81.7879C194.316 80.9859 192.933 80.0974 191.609 79.1273L189.21 82.4036Z'
              fill='white'
            />
            <path
              d='M195.723 86.3635C197.341 87.1666 199.007 87.8703 200.711 88.4708L202.061 84.6409C200.512 84.0952 198.998 83.4557 197.527 82.7259L195.723 86.3635Z'
              fill='white'
            />
            <path
              d='M203.771 89.4265C205.514 89.9027 207.284 90.2724 209.072 90.5333L209.659 86.5152C208.034 86.2781 206.425 85.9421 204.841 85.5094L203.771 89.4265Z'
              fill='white'
            />
            <path
              d='M213.5 89C219.344 89 225.13 87.849 230.529 85.6126C235.928 83.3763 240.834 80.0985 244.966 75.9663C249.098 71.834 252.376 66.9284 254.613 61.5294C256.849 56.1304 258 50.3438 258 44.5H257.12C257.12 50.2283 255.992 55.9005 253.8 61.1927C251.608 66.4849 248.395 71.2936 244.344 75.3441C240.294 79.3946 235.485 82.6076 230.193 84.7997C224.9 86.9919 219.228 88.1201 213.5 88.1201L213.5 89Z'
              fill='white'
            />
          </svg>
        </div>
      </div>

      <div className={appStyle.container}>
        {menuitems}
      </div>
    </header>
  );
}

export default Header;
