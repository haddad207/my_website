import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import resumePDF from "../../assets/files/FullStackRes_FadiHaddad.pdf";
import DevopsPDF from "../../assets/files/DevOpsResume.pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";
import useWindowDimensions from "../../utils/windowDimensions";
import Icons from "./Icons";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Resume() {
  const { width, height } = useWindowDimensions();
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [value, setValue] = useState(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const onButtonClick = () => {
    const link = document.createElement("a");
    link.href = value === 0 ? resumePDF : DevopsPDF;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Full-Stack Developer" {...a11yProps(0)} />
          <Tab label="DevOps Enginner" {...a11yProps(1)} />
          <Tab
            label="Game Development (Coming Soon)"
            {...a11yProps(2)}
            disabled
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container>
          <Grid item xs={4} />

          <Grid item xs={4}>
            <Document
              file={resumePDF}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={console.error}
            >
              {height > 1000 ? (
                <Page pageNumber={pageNumber} height={height} />
              ) : (
                <Page pageNumber={pageNumber} height={height} width={width} />
              )}
            </Document>

            <Box textAlign="match-parent" paddingLeft={4}>
              <Button onClick={onButtonClick} variant="contained">
                Download Resume
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4} />
        </Grid>
        <Grid container>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Typography variant="h6" paddingLeft={4} paddingTop={4}>
              You can click on the following icons for more details about my
              relevant experience:
            </Typography>
            <Icons resume={true} />
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid container paddingTop={0}>
          <Grid item xs={4} />

          <Grid item xs={4}>
            <Document
              file={DevopsPDF}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={console.error}
            >
              {height > 1000 ? (
                <Page pageNumber={pageNumber} height={height} />
              ) : (
                <Page pageNumber={pageNumber} height={height} width={width} />
              )}
            </Document>

            <Box textAlign="match-parent" paddingLeft={4}>
              <Button onClick={onButtonClick} variant="contained">
                Download Resume
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4} />
        </Grid>
        <Grid container>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Typography variant="h6" paddingLeft={4} paddingTop={4}>
              You can click on the following icons for more details about my
              relevant experience:
            </Typography>
            <Icons resume={true} />
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </CustomTabPanel>
    </>
  );
}
