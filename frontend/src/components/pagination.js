import styles from '@/styles/Job.module.css'

export default function Pagination({total, pageNum, pageSize, setPageNum, setPageSize}) {
  const data = [];
  for (let index = 1; index <= total / pageSize + 1; index++) {
    data.push(index);
  }

  return (
    <div className="relative w-full h-[32px] flex mt-8px flex-row items-center justify-space-between">
      <div className="grow-[1]" />
      <div className="absolute w-full grow-[2] flex flex-row justify-center items-center gap-[10px] text-center">
        <img
          className={styles.paginationButton}
          src="/ic_nav-arrow-left.png"
          onClick={() => {
            if (pageNum > 1) {
              setPageNum(pageNum - 1);
            }
          }}/>
        {
          data.map((item) => (
            <div className={item == pageNum ? styles.paginationLabelClicked : styles.paginationLabel} onClick={() => setPageNum(item)}>
              <div className={styles.paginationState}>{item}</div>
            </div>
          ))
        }
        <img
          className={styles.paginationButton}
          src="/ic_nav-arrow-right.png"
          onClick={() => {
            if (pageNum < data.length) {
              setPageNum(pageNum + 1);
            }
          }}/>
      </div>
      <div className="absolute right-[0px] flex flex-row grow-[1] text-right gap-[16px] justify-end items-center font-[Rubik]">
        {`${total} - total`}
        <select className="h-[36px] grow-auto border-[#3B368D] border-[1px] rounded-[8px] p-[8px]" onChange={text => setPageSize(text.target.value)} >
          <option value={5}>5 / pages</option>
          <option value={10}>10 / pages</option>
          <option value={25}>25 / pages</option>
          <option value={50}>50 / pages</option>
        </select>
      </div>
    </div>
  )
}