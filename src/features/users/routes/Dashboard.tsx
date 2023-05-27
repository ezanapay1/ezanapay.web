import { useState } from "react";
import { Card, Grid, Tab, TabList, Text, Title } from "@tremor/react";
import { UserButton } from "../components/UserInfo";

export default function Dashboard() {
  const [selectedView, setSelectedView] = useState("1");
  return (
    <main className="bg-white p-6 sm:p-10 h-screen w-screen">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div>
        <Title>Dashboard</Title>
        <Text></Text>
        </div>
        <UserButton image={""} name={"Amos Nyaburi"} email={"mogaka.amo254@gmail.com"}        
        />
      </div>

      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value="1" text="Overview" />
        <Tab value="2" text="My Properties" />
        <Tab value="3" text="My Tenants" />
        <Tab value="4" text="Billing" />
        <Tab value="5" text="Profile" />
      </TabList>

      {selectedView === "1" && (
        <>
        <Grid numColsLg={3} className="mt-6 gap-6 ">
          <Card>
            {/* Placeholder to set height */}
            <div className="h-28 bg-primary/5" />
          </Card>
          <Card>
            {/* Placeholder to set height */}
            <div className="h-28" />
          </Card>
          <Card>
            {/* Placeholder to set height */}
            <div className="h-28" />
          </Card>
        </Grid>

        {/* <div className="mt-6">
          <Card>
            <div className="h-80" />
          </Card>
        </div> */}
        </>
      )}

      {selectedView === "2" && (
        <Card className="mt-6">
          <div className="h-96" /></Card>
          )}

      {/* {selectedView === "1" ? (
       
      ) : (
        <Card className="mt-6">
          <div className="h-96" />
        </Card>
      )} */}
    </main>
  );
}