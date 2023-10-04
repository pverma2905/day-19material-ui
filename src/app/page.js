'use client'

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    handleOpen()

    setTimeout(() => {
      handleClose()
    }, 2000)
  }, [])


  return (
    <>
      {/* <Aside /> */}
      <section>
        <h2>Home</h2>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum ex distinctio eligendi similique, totam quod voluptatibus, mollitia tempore, eum quia? Reiciendis sit provident in odit repellendus impedit iste cupiditate velit, eum, fugit, illo repellat! Assumenda velit quod beatae nemo sapiente obcaecati nihil officia et, fugit sit qui, nobis veritatis corporis optio reiciendis harum eveniet unde est eum deserunt repudiandae illo. In quia tempora ducimus rerum? Odio illo inventore ab, beatae aliquid ipsam illum adipisci omnis ea repellat ullam itaque rerum rem necessitatibus laboriosam vitae aperiam a! Necessitatibus doloribus labore eos sit velit, optio neque quos iste tempore enim assumenda?</div>
      </section>

      <Button onClick={handleOpen}></Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

    </>
  )
}
