import { Main } from "./styles";
import Breadcumb from "../../components/Breadcrumb";
import SchedulingForm from "../../components/SchedulingForm";
import FailedScheduling from "../../components/FailedScheduling";
import SuccessfulScheduling from "../../components/SuccessfulScheduling";
import Layout from "../../components/Layout";
import { PageState } from "../../entities/PageState";

import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ScheduleAppointment() {
  const [pageState, setPageState] = useState<PageState>("form");
  
  return (
    <Layout>

      <Breadcumb 
        ordenedLabels={["Home", "Agendar Consulta"]} 
        pageDescription="Recupere seu pokémon em 5s"
      />

      <Main>
        {pageState==="form" && <SchedulingForm setPageState={setPageState}/>}
        {pageState==="fail" && <FailedScheduling />}
        {pageState==="success" && <SuccessfulScheduling />}
      </Main>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
      />
      
    </Layout>
  )
}
