import { useState } from "react";
import Breadcumb from "../../components/Breadcrumb";
import SchedulingForm from "../../components/SchedulingForm";
import FailedScheduling from "../../components/FailedScheduling";
import SuccessfulScheduling from "../../components/SuccessfulScheduling";
import { Main } from "./styles";
import Layout from "../../components/Layout";

type pageState = "form" | "success" | "fail";

export default function ScheduleAppointment() {

  const [pageState, setPageState] = useState<pageState>("form");
  
  return (
    <Layout>
      <Breadcumb 
        ordenedLabels={["Home", "Agendar Consulta"]} 
        pageDescription="Recupere seu pokémon em 5s"
      />
      <Main>
        {pageState==="form" && <SchedulingForm />}
        {pageState==="fail" && <FailedScheduling />}
        {pageState==="success" && <SuccessfulScheduling />}
      </Main>
    </Layout>
  )
}
