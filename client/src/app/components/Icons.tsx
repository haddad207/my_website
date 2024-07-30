import { CssBaseline, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import cSharpIcon from "../../assets/images/csharp-icon.png";
import cPlusIcon from "../../assets/images/cplus-icon.png";
import pythonIcon from "../../assets/images/python-icon.png";
import djangoIcon from "../../assets/images/django-icon.png";
import javaIcon from "../../assets/images/java-icon.png";
import kubernetesIcon from "../../assets/images/k8s-icon.png";
import dockerIcon from "../../assets/images/docker-icon.png";
import mongoDbIcon from "../../assets/images/mongodb-icon.png";
import sqlIcon from "../../assets/images/sql-icon.png";
import unrealEngineIcon from "../../assets/images/unrealengine-icon.png";
import springBootIcon from "../../assets/images/springboot-icon.png";
import awsIcon from "../../assets/images/aws-icon.png";
import linuxIcon from "../../assets/images/linux-icon.png";
import ansibleIcon from "../../assets/images/ansible-icon.png";
import jenkinsIcon from "../../assets/images/jenkins-icon.png";
import expressJsIcon from "../../assets/images/expressjs-icon.png";
import reactIcon from "../../assets/images/react/react-icon.png";
import jsIcon from "../../assets/images/js-icon.png";
import tsIcon from "../../assets/images/ts-icon.png";
import nodeIcon from "../../assets/images/node-icon.png";

interface IconProps {
  resume: boolean;
}

export default function Icons(props: IconProps) {
  const transition = { duration: 2, ease: "easeInOut" };

  const hovering = (title: string, icon: string, nav: string) => {
    return (
      <NavLink to={nav}>
        <motion.img
          whileHover={{ scale: 1.2 }}
          alt={title}
          src={icon}
          width="100"
          height="100"
        />
      </NavLink>
    );
  };

  const gridfy = () => {
    return (
      <>
        <Stack spacing={2} direction="row">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
          >
            {hovering("React Icon", reactIcon, "/react")}
            {hovering("JavaScript Icon", jsIcon, "/node")}
            {hovering("TypeScript Icon", tsIcon, "/node")}
            {hovering("Node Icon", nodeIcon, "/node")}
            {hovering("Express Icon", expressJsIcon, "/node")}
            {hovering("C# Icon", cSharpIcon, "/csharp")}
            {hovering("C++ Icon", cPlusIcon, "/ue5")}
            {hovering("Unreal Engine 5 Icon", unrealEngineIcon, "/ue5")}
            {hovering("Python Icon", pythonIcon, "/python")}
            {hovering("Django Icon", djangoIcon, "/django")}
          </motion.div>
        </Stack>
        <Stack spacing={2} direction="row">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
          >
            {hovering("Java Icon", javaIcon, "/java")}
            {hovering("SpringBoot Icon", springBootIcon, "/java")}
            {hovering("AWS Icon", awsIcon, "/cicd")}
            {hovering("Jenkins Icon", jenkinsIcon, "/cicd")}
            {hovering("Kubernetes Icon", kubernetesIcon, "/cicd")}
            {hovering("Docker Icon", dockerIcon, "/cicd")}
            {hovering("Ansible Icon", ansibleIcon, "/linux-ansible")}
            {hovering("Linux Icon", linuxIcon, "/linux-ansible")}
            {hovering("MongoDB Icon", mongoDbIcon, "/databases")}
            {hovering("SQL Icon", sqlIcon, "/databases")}
          </motion.div>
        </Stack>
      </>
    );
  };

  const gridfy2 = () => {
    return (
      <>
        <Stack spacing={2} direction="row">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
          >
            {hovering("React Icon", reactIcon, "/react")}
            {hovering("JavaScript Icon", jsIcon, "/node")}
            {hovering("TypeScript Icon", tsIcon, "/node")}
            {hovering("Node Icon", nodeIcon, "/node")}
            {hovering("Express Icon", expressJsIcon, "/node")}
            {hovering("C# Icon", cSharpIcon, "/csharp")}
            {hovering("C++ Icon", cPlusIcon, "/ue5")}
            {hovering("Unreal Engine 5 Icon", unrealEngineIcon, "/ue5")}
            {hovering("Python Icon", pythonIcon, "/python")}
            {hovering("Django Icon", djangoIcon, "/django")}
            {hovering("Java Icon", javaIcon, "/java")}
            {hovering("SpringBoot Icon", springBootIcon, "/java")}
            {hovering("AWS Icon", awsIcon, "/cicd")}
            {hovering("Jenkins Icon", jenkinsIcon, "/cicd")}
            {hovering("Kubernetes Icon", kubernetesIcon, "/cicd")}
            {hovering("Docker Icon", dockerIcon, "/cicd")}
            {hovering("Ansible Icon", ansibleIcon, "/linux-ansible")}
            {hovering("Linux Icon", linuxIcon, "/linux-ansible")}
            {hovering("MongoDB Icon", mongoDbIcon, "/databases")}
            {hovering("SQL Icon", sqlIcon, "/databases")}
          </motion.div>
        </Stack>
      </>
    );
  };
  return (
    <>
      <CssBaseline />
      <Grid container paddingTop={2} paddingRight={5} paddingLeft={5}>
        {props.resume ? gridfy2() : gridfy()}
      </Grid>
    </>
  );
}
