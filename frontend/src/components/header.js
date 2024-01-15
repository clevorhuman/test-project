import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Job.module.css'

export default function Header() {
  const router = useRouter();

  const [result, setResult] = useState();

  const onSubmit = () => {
    TutorialService.create({
      title: "title1",
      description: "description1"
    }).then(res => {
      console.log(res);
    })
  };

  return (
    <div className="w-full flex flex-row justify-center pt-[14px] pb-[14px] gap-[32px] bg-white">
      <div className="w-[1400px] h-[47px] gap-[32px]  flex flex-row items-center justify-space-between bg-white">
        <img
          src="/logo.png"
          alt="Next.js Logo"
        />
        <div className="h-[32px] flex grow-auto flex-row items-baseline text-[#B3B3B3] justify-space-between pl-[80px] gap-[54px]">
          <button className={styles.buttonLinked}>
            <img
              className={styles.buttonIcon}
              src="/ic_add-user.png"
              alt="Next.js Logo"
            />
            <div className={styles.buttonLabel}>
              Hire
            </div>
          </button>
          <button className={styles.buttonLinked}>
            <img
              className={styles.buttonIcon}
              src="/ic_reports.png"
              alt="Next.js Logo"
            />
            <div className={styles.buttonLabel}>
              Lead
            </div>
          </button>
          <button className={styles.buttonLinked}>
            <img
              className={styles.buttonIcon}
              src="/ic_ecology-book.png"
              alt="Next.js Logo"
            />
            <div className={styles.buttonLabel}>
              Train
            </div>
          </button>
          <button className={styles.buttonLinked}>
            <img
              className={styles.buttonIcon}
              src="/ic_message.png"
              alt="Next.js Logo"
            />
            <div className={styles.buttonLabel}>
              Community
            </div>
          </button>
        </div>
        <div className="h-[36px] w-[217px] flex grow-auto flex-row justify-center items-center pr-[16px] pt-[8px] pb-[8px] pl-[16px] border-none rounded-[16px] bg-[#EBEBF4] text-white gap-[10px]">
          <img className="relative text-white" src="/ic_search.png" />
          <input
            className={styles.searchInput}
            placeholder='Search'
          />
        </div>
        <img className="w-[24px] h-[24px] grow-auto" src="/ic_bell-badge.png" />
        <div className="grow-auto w-[166px] h-[47px] flex flex-row gap-[12px]" onClick={() => router.push('/login')}>
          <img src="/avatar.png" />
          <div className="flex flex-col gap-[4px]">
            <div className="grow-[2] text-[16px]">John Doe</div>
            <div className="grow-[1] text-[12px]">Hiring Manager</div>
          </div>
        </div>
      </div>
    </div>
  );
}