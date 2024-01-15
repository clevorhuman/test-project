"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/Job.module.css'
import Header from '@/components/header';
import Footer from '@/components/footer';
import jobservice from '@/services/JobService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function JobPost() {
  const router = useRouter();
  const initData = {
    companyName: "",
    hiringManagerName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
    title: "",
    salaryAmount: 0,
    type: 0,
    createdDate: "",
    expirationDate: ""
  }

  const [formData, setFormData] = useState(initData);

  const onSubmit = () => {
    console.log(formData);
    jobservice.create({
      ...formData,
      createdDate: new Date(),
      expirationDate: new Date()
    }).then(res => {
      // setFormData(initData);
      toast("Job post is success!")
      router.push('/job/list')
    });
  }
  
  return (
    <div>
      <main>
        <Header />

        <div className="h-auto w-[100%] mw-[1400px] relative">
          <img className={styles.subHeaderBackground} src="/bg_job-post.png" />
          <div className={styles.subHeaderHorizontalContainer}>
            <div className={styles.subHeaderVerticalContainer}>
              <div className={styles.subHeaderContent}>
                <div className={styles.subHeaderTop}>
                  <div className={styles.subHeaderAvatar}>
                    <img src="/ic_avatar.png" />
                  </div>
                  <div className={styles.subHeaderLabelGroup}>
                    <div className={styles.subHeaderTitle}>Post New Job</div>
                    <div className={styles.subHeaderDescription}>Lorem ipsum dolor sit amet consectetur. Tellus nulla ipsum faucibus consectetur. Felis nunc in tempor aenean purus</div>
                  </div>
                </div>
                <div className={styles.subHeaderButtonGroup}>
                  <div className={styles.subHeaderButton}>Dashboard</div>
                  <Link href={`/job/list`} className={styles.subHeaderButton}>My Jobs</Link>
                  {/* <div className={styles.subHeaderButton} onClick={() => router.push('/job/list')}>My Jobs</div> */}
                  <div className={styles.subHeaderButton}>Applicants</div>
                  <div className={styles.subHeaderButton}>Interviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <code className="flex flex-row justify-center">
          <div className="w-[1400px] flex flex-col m-1 p-[24px] text-center border-none rounded-[10px] bg-white">
            <div className={styles.formGroup}>
              <div className={styles.formTop}>
                <div className={styles.formLabel}>Company Name</div>
                <div className={styles.formValidate}>Required</div>
              </div>
              <div className={styles.formInputGroup}>
                <input
                  className={styles.formInput}
                  placeholder="Please input here."
                  onChange={text => setFormData({ ...formData, companyName: text.target.value })} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.formTop}>
                <div className={styles.formLabel}>Hiring Manager Name</div>
                <div className={styles.formValidate}>Required</div>
              </div>
              <div className={styles.formInputGroup}>
                <input
                  className={styles.formInput}
                  placeholder="Please input here."
                  onChange={text => setFormData({ ...formData, hiringManagerName: text.target.value })} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.formTop}>
                <div className={styles.formLabel}>Email</div>
                <div className={styles.formValidate}>Required</div>
              </div>
              <div className={styles.formInputGroup}>
                <input
                  className={styles.formInput}
                  placeholder="Please input here."
                  onChange={text => setFormData({ ...formData, email: text.target.value })} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.formTop}>
                <div className={styles.formLabel}>Address</div>
                <div className={styles.formValidate}>Required</div>
              </div>
              <div className={styles.formInputGroup}>
                <input
                  className={styles.formInput}
                  placeholder="Please input here."
                  onChange={text => setFormData({ ...formData, address: text.target.value })} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.formTop}>
                <div className={styles.formLabel}>City</div>
                <div className={styles.formValidate}>Required</div>
              </div>
              <div className={styles.formInputGroup}>
                <input
                  className={styles.formInput}
                  placeholder="Please input here."
                  onChange={text => setFormData({ ...formData, city: text.target.value })} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.formTop}>
                <div className={styles.formLabel}>State</div>
                <div className={styles.formValidate}>Required</div>
              </div>
              <div className={styles.formInputGroup}>
                <input
                  className={styles.formInput}
                  placeholder="Please input here."
                  onChange={text => setFormData({ ...formData, state: text.target.value })} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.formTop}>
                <div className={styles.formLabel}>Zip</div>
                <div className={styles.formValidate}>Required</div>
              </div>
              <div className={styles.formInputGroup}>
                <input
                  className={styles.formInput}
                  placeholder="Please input here."
                  onChange={text => setFormData({ ...formData, zip: parseInt(text.target.value) })} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.formTop}>
                <div className={styles.formLabel}>Title</div>
                <div className={styles.formValidate}>Required</div>
              </div>
              <div className={styles.formInputGroup}>
                <input
                  className={styles.formInput}
                  placeholder="Please input here."
                  onChange={text => setFormData({ ...formData, title: text.target.value })} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.formTop}>
                <div className={styles.formLabel}>Salary Amount</div>
                <div className={styles.formValidate}>Required</div>
              </div>
              <div className={styles.formInputGroup}>
                <input
                  className={styles.formInput}
                  placeholder="Please input here."
                  onChange={text => setFormData({ ...formData, salaryAmount: parseInt(text.target.value) })} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.formTop}>
                <div className={styles.formLabel}>Customer Service/ Success Support?</div>
                <div className={styles.formValidate}>
                  <input
                    type="checkbox"
                    onClick={text => setFormData({ ...formData, type: text.target.checked }) } />
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.formTop}>
                <div className={styles.formLabel}>Created Date</div>
                <div className={styles.formValidate}>Required</div>
              </div>
              <div className={styles.formInputGroup}>
                <input
                  className={styles.formInput}
                  placeholder="Please input here."
                  onChange={text => setFormData({ ...formData, createdDate: new Date(text.target.value) })} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.formTop}>
                <div className={styles.formLabel}>Expiration Date</div>
                <div className={styles.formValidate}>Required</div>
              </div>
              <div className={styles.formInputGroup}>
                <input
                  className={styles.formInput}
                  placeholder="Please input here."
                  onChange={text => setFormData({ ...formData, expirationDate: new Date(text.target.value) })} />
              </div>
            </div>

            <div className={styles.formSubmit} onClick={() => onSubmit()}>
              <div className={styles.formSubmitGroup}>
                <img className={styles.formSubmitIcon} src="/ic_check.png" />
                <div className={styles.formSubmitLabel}>Submit</div>
              </div>
            </div>
          </div>
        </code>

        <Footer />
      </main>

    </div>
  );
}