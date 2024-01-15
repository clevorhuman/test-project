"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import styles from '@/styles/Job.module.css'
import Header from '@/components/header';
import Footer from '@/components/footer';
import jobservice from '@/services/JobService';

import List from '@/components/List';
import ListItem from '@/components/ListItem';
import Pagination from '@/components/pagination';
import Link from 'next/link';
import Image from 'next/image';

export default function JobList() {
  const router = useRouter();
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [searchKey, setSearchKey] = useState("");
  const [filter, setFilter] = useState(2);
  const [total, setTotal] = useState(0);
  const [jobList, setJobList] = useState([]);

  const getJobList = () => {
    jobservice.getAll(pageNum, pageSize, searchKey, filter).then(res => {
      console.log(res.data);
      setJobList(res.data.total.rows);
      setTotal(res.data.total.count);
    });
  }

  useEffect(() => {
    getJobList();
    router.push(`/job/list?pageNum=${pageNum}&pageSize=${pageSize}&search_key=${searchKey}&filter=${filter}`);
  }, [pageNum, pageSize, searchKey, filter]);

  useEffect(() => {
    console.log(pageNum);
  }, [pageNum]);

  return (
    <div className={styles.container}>
      <main>
        <Header />

        <div className={styles.subHeader}>
          <img className={styles.subHeaderBackground} src="/bg_job-post.png" />
          <div className={styles.subHeaderHorizontalContainer}>
            <div className={styles.subHeaderVerticalContainer}>
              <div className={styles.subHeaderContent}>
                <div className={styles.subHeaderTop}>
                  <div className={styles.subHeaderAvatar}>
                    <img src="/ic_avatar.png" />
                  </div>
                  <div className={styles.subHeaderLabelGroup}>
                    <div className={styles.subHeaderTitle} onClick={() => router.push('/job/list')}>My Jobs</div>
                    <div className={styles.subHeaderDescription}>Lorem ipsum dolor sit amet consectetur. Tellus nulla ipsum faucibus consectetur. Felis nunc in tempor aenean purus</div>
                  </div>
                </div>
                <div className={styles.subHeaderButtonGroup}>
                  <div className={styles.subHeaderButton}>Dashboard</div>
                  <Link href={`/job/list?pageNum=${pageNum}&pageSize=${pageSize}&search_key=${searchKey}&filter=${filter}`} className={styles.subHeaderButton}>My Jobs</Link>
                  <div className={styles.subHeaderButton}>Applicants</div>
                  <div className={styles.subHeaderButton}>Interviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <code className="flex flex-row justify-center">
          <div className="w-[1400px] flex flex-col m-1 p-[24px] text-center border-none rounded-[10px] bg-white">
            <div className="h-[32px] flex flex-row justify-space-between items-center gap-[12px]">
              <Image width={24} height={24} src="/ic_book.png"  />
              <div className="text-[16px]">My All Jobs</div>
              <div className="grow-[1]" />
              <div className={styles.contentTopSearchGroup}>
                <Image width={14} height={14} src="/ic_search-gray.png" />
                <input
                  className={styles.contentTopSearchInput}
                  onChange={text => setSearchKey(text.target.value)}
                  placeholder="Search" />
              </div>
              <div className="h-[32ps] grow-auto p-[8px] border-[1px] border-[#D8D7E8] rounded-[8px] flex flex-row justify-space-evenly items-center gap-[8px]">
                <Image width={14} height={14} src="/ic_filter.png" />
                <select className={styles.contentTopFilterSelect} onChange={text => setFilter(text.target.value)} >
                  <option value={2}>All</option>
                  <option value={0}>Fixed</option>
                  <option value={1}>Hourly</option>
                </select>
              </div>
              <Link className={styles.contentTopSubmitGroup} href='/job/post'>
                <Image width={18} height={20} src="/ic_submit.png" />
                <div className="text-[#EBEBF4] text-[14px] font-[Rubik]">Post New Job</div>
              </Link>
            </div>

            <List>
              {
                jobList.map(item => (
                  <ListItem key={item ? item.id : 0} item={item ? item: {}} />
                ))
              }
            </List>
            <Pagination
              total={total}
              pageNum={pageNum}
              pageSize={pageSize}
              setPageNum={setPageNum}
              setPageSize={setPageSize}
            />
          </div>
        </code>

        <Footer />
      </main>

    </div>
  );
}