import xlsx from 'xlsx';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserImport = () => {

    // const steps = ['Upload your excel/csv file ', 'what your excel/csv headers mean', 'Summary'];

    const steps = [
        {
            title: 'Select File',
            desc: 'Browse your excel/csv file to upload'
        },
        {
            title: 'Entity Mapping',
            desc: 'Tell us what your excel/csv headers mean'
        },
        {
            title: 'Summary',
            desc: 'Done'
        }
       
    ];

    const readUploadFile = (e:any) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const event:any = e.target;
                const data = event.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                console.log(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
  
    const isStepOptional = (step: number) => {
      return step === 1;
    };
  
    const isStepSkipped = (step: number) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    return (
        <>
            <main id="main" className="main">
                <div className="d-flex justify-content-between pagetitle mb-0">
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/users">User</a></li>
                            <li className="breadcrumb-item active">Import page</li>
                        </ol>
                    </nav>
                </div>
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body my-5 py-5">
                                   

                                    <Box sx={{ width: '100%' }}>
                                        <Stepper activeStep={activeStep} alternativeLabel>
                                            {
                                                steps.map((label, index) => {
                                                const stepProps: { completed?: boolean } = {};
                                                const labelProps: { optional?: React.ReactNode; } = {};

                                                // if (isStepOptional(index)) {
                                                //     labelProps.optional = (
                                                //         <Typography variant="caption">Optional</Typography>
                                                //     );
                                                // }
                                                if (isStepSkipped(index)) {
                                                    stepProps.completed = false;
                                                }

                                                return (
                                                    <Step key={label.title} {...stepProps}>
                                                        <StepLabel {...labelProps}>
                                                            <h3>{label.title}</h3>
                                                            {label.desc}
                                                        </StepLabel>
                                                    </Step>
                                                );
                                                })
                                            }
                                        </Stepper>
                                        {
                                            activeStep === steps.length ? (
                                            <>
                                                <Typography sx={{ mt: 2, mb: 1 }}>
                                                    All steps completed - you&apos;re finished
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                    <Box sx={{ flex: '1 1 auto' }} />
                                                    <Button onClick={handleReset}>Reset</Button>
                                                </Box>
                                            </>
                                            ) : (
                                                <>
                                                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                        {/* <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>Back</Button> */}
                                                   
                                                        {/* { isStepOptional(activeStep) && <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}> Skip</Button> } */}
                                                        <Box sx={{ flex: '1 1 auto' }} />
                                                        <Button onClick={handleNext}> { activeStep === steps.length - 1 ? 'Finish' : 'Next' }</Button>

                                                    </Box>
                                                </>
                                            )
                                        }
                                        </Box>

                                        <label className="col-sm-2 col-form-label">File Upload</label>
                                        <div className="col-sm-10">
                                            <input className="form-control" type="file" name="upload" id="upload" onChange={readUploadFile}/>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}


export default UserImport;