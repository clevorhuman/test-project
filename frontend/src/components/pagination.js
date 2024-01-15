import styles from '@/styles/Job.module.css'

export default function Pagination({total}) {

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
        <div className={styles.paginationLabelClicked}>
          <div className={styles.paginationState}>1</div>
        </div>
        <div className={styles.paginationLabel}>
          <div className={styles.paginationState}>2</div>
        </div>
        <div className={styles.paginationLabel}>
          <div className={styles.paginationState}>3</div>
        </div>
        <img
          className={styles.paginationButton}
          src="/ic_nav-arrow-right.png"
          onClick={() => {
            if (pageNum < data.length) {
              setPageNum(pageNum + 1);
            }
          }}/>
      </div>
    </div>
  )
}