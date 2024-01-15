"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import userservice from '@/services/UserService';
import { validEmail } from '@/utils/valid-email';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordType, setPasswordType] = useState(true);

  const googleLogin = useGoogleLogin({
    onSuccess: (credentialRespose) => {
      console.log(credentialRespose);
      userservice.googleAuth({
        credentialRespose
      }).then((res) => {
        toast.success("Login success by Google");
        router.push('/job/list');
      });
    },
    flow: 'auth-code',
  });

  const onSubmit = () => {
    if (!validEmail(email)) {
      toast.warning("Email validation failed!")
      return;
    } else {
      userservice.signup({
        email: email,
        password: password
      }).then(res => {
        toast.success("Register is success!");
        router.push('/login');
      }).catch(err => {
        console.log(err);
        toast.error(err.response.data.message);
      })
    };
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='bg-white p-6 rounded-lg flex flex-col md:flex-row gap-6 w-5/6 md:w-[721px] m-auto'>
	    		<div className='md:w-[246px] w-1/3'>
            <Image
              className="rounded-lg h-full object-cover"
              src="/bg_signup.png"
              alt="Next.js Logo"
              width={246}
              height={509}
              priority
            />
          </div>
          <div className="flex grow-[1] flex-col justify-between font-[Rubik]">
            <div className="flex flex-row grow-auto pt-8 justify-center">
              <Image
                src="/Logo.png"
                alt="Next.js Logo"
                width={258}
                height={28}
                priority
              />
            </div>
            <div>
              <div className="text-center text-[16px] text-[#0A50A4]">
                Create an account
              </div>
              <div className="text-center text-[10px] text-[#B3B3B3]">
                create a new account
              </div>
            </div>
            <div className="grow-auto">
              <div className="mt-[10px] text-[14px] text-[#4C4C4C]">Email Address</div>
              <div className="w-full h-[32px] flex flex-row mt-[10px] p-[8px] border-[1px] border-[#D8D7E8] text-[#D8D7E8] items-center rounded-[8px] gap-[8px]">
                <img
                  className="relative w-[14px] h-[14px]"
                  src="/ic_search-gray.png"
                  alt="Next.js Logo"
                />
                <input
                  // className="border-none w-full"
                  className={styles.formInput}
                  placeholder='Please input here.'
                  onChange={text => setEmail(text.target.value)}
                />
              </div>
              <div className="mt-[10px] text-[14px] text-[#4C4C4C]">User Password</div>
              <div className="w-full h-[32px] flex flex-row mt-[10px] p-[8px] border-[1px] border-[#D8D7E8] text-[#D8D7E8] items-center rounded-[8px] gap-[8px]">
                <input
                  type={passwordType ? 'password' : 'text'}
                  // className="border-none w-full"
                  className={styles.formInput}
                  placeholder='Please input here.'
                  onChange={text => setPassword(text.target.value)}
                />
                <img
                  className="relative w-[18px] h-[12px]"
                  src="/ic_eye.png"
                  alt="Next.js Logo"
                  onClick={() => setPasswordType(!passwordType)}
                />
              </div>
            </div>
            <button
              className="grow-auto w-full h-[32px] border-none rounded-[8px] text-[14px] text-white bg-[#3B368D]"
              onClick={() => onSubmit()}
            >
              Sign Up
            </button>
            <div className="flex grow-auto flex-row items-center">
              <div className="grow-[1] h-[1px] border-solid border-[1px] border[#B3B3B3]" />
              <div className="grow-auto text-[14px] pl-1 pr-1 text-[#B3B3B3]">or</div>
              <div className="grow-[1] h-[1px] border-solid border-[1px] border[#B3B3B3]" />
            </div>
            <button
              className="flex grow-auto flex-row justify-center w-[100%] h-[32px] pt-1 pl-3 pb-1 pr-3 border-[1px] border-[#D8D7E8] radius-1 text-[14px] text-[#3B368D] bg-white rounded-[8px]"
              onClick={() => googleLogin()}
            >
              <img
                className="grow-auto pr-2"
                src="/logos_google-icon.png"
                alt="Next.js Logo"
              />
              Google
            </button>  
            <button className="flex grow-auto flex-row justify-center w-[100%] h-[32px] pt-1 pl-3 pb-1 pr-3 border-[1px] border-[#D8D7E8] radius-1 text-[14px] text-[#3B368D] bg-white rounded-[8px]">
              <img
                className="grow-auto pr-2"
                src="/logos_facebook.png"
                alt="Next.js Logo"
              />
              Facebook
            </button>
            <div className="grow-auto text-[14px] text-center text-[#4C4C4C]">
              Already have an account?
              &nbsp;
              <Link href="/login" style={{color: "blue"}}>Log in</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}