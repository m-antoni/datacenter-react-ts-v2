import xlsx from 'xlsx';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UserImportedData from './UserImportedData';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store';
import { getSingleSetting, insertExcelData } from '../../redux/actions/users/user.actions';
import { Spinner } from '../_layouts/Spinner';
import UserImportedSummary from './UserImportSummary';
import { ToastDanger, ToastSuccess } from '../../redux/service/toast.service';

const UserImport = () => {

    const dispatch = useDispatch();
    const collection_keys = useSelector((state: RootStore) => state.user.collection_keys);
    const is_excel_save = useSelector((state: RootStore) => state.user.is_excel_save);
    const validate_excel = useSelector((state: RootStore) => state.user.validate_excel);
    const loading = useSelector((state: RootStore) => state.common.loading); 

    const [excelData, setExcelData] = useState<any>(null);
    const [collectionKeys, setCollectionKeys] = useState<null | []>();
    const [columnToField, setColumnToField] = useState<any>([]);

    useEffect(() => {
        dispatch(getSingleSetting('collection-keys'));
    },[])

    useEffect(() => {
        if(is_excel_save === true){
            ToastSuccess("Excel/CSV data saved successfully.")
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }

        if(is_excel_save === false && validate_excel === undefined){
            ToastDanger("Server Error, data cannot save.")
        }
    },[is_excel_save])


    useEffect(() => {
        if(collection_keys != undefined){
            let _arr: any = [];
            collection_keys.keys.map((key: string) => _arr.push({ value: key, label: key }));
            _arr.length > 0 && setCollectionKeys(_arr);
        }
    },[collection_keys])


    useEffect(() => {
        if(excelData != null){
            handleNext();
        }
    },[excelData])


    const onChangeSelect = (selected: any, index: any): void => {
        let oldArray = [...columnToField];
        oldArray[index]['set_field'] = selected.value;
        setColumnToField(oldArray);
    }


    const getValue = (opts: any, val: any) : any => {
        return opts.filter((o: any)=> val.includes(o.value));
    };

  
     // Improt excel convert to JSON
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
                const json = xlsx.utils.sheet_to_json(worksheet, { defval: "", blankrows: true});
                // console.log(json);
                setExcelData(json);
                setColumnFieldValues(json[0]);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }


    const setColumnFieldValues = (obj: any) => {
        let updatedArr: any = [];
        Object.entries(obj).map(([key, val]) => {
            updatedArr.push({ column: key, sample_data: val, set_field: "" });
        });
        setColumnToField(updatedArr);
    }


    const stepValidate = (): boolean => {
        
        let arr = columnToField.map((data: any) => {
            if(data.set_field !== ""){
                return false;
            }else{
                return true;
            }
        })

        return  arr.includes(true) ? true : false;
    }


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
            desc: 'Your headers to field summary'
        }
    ];

    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());
  
    const isStepOptional = (step: number) => {
      return step === 1;
    };
  
    const isStepSkipped = (step: number) => {
        // console.log(step);
        return skipped.has(step);
    };
  
    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
    
        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // ENTITY MAPPING
        if(activeStep === 1) 
        {
            // validated all excel data
           let validate = stepValidate();
           if(validate == true)
           {
               ToastDanger("Please complete all selection fields.");
           }else{
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
           }
        }
        else if(activeStep === 2)
        {
            dispatch(insertExcelData(excelData, columnToField));
        }
        else
        {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        
        
        setSkipped(newSkipped);
    };

    console.log(activeStep);




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

        console.log(newSkipped)

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
                                    {
                                        loading ? <Spinner/> :
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
                                            <div className="container mt-5">
                                                {
                                                    activeStep === steps.length ? (
                                                        <>
                                                            <Typography sx={{ mt: 2, mb: 1 }}>
                                                                <div className="d-flex justify-content-center mt-5 pt-5">
                                                                    <Button onClick={handleReset} variant="contained">START AGAIN</Button>
                                                                </div>
                                                            </Typography>
                                                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                                <Box sx={{ flex: '1 1 auto' }} />
                                                                {/* <Button onClick={handleReset}>START AGAIN</Button> */}
                                                            </Box>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {
                                                                activeStep === 0 && (
                                                                    <div className="d-flex justify-content-center">
                                                                        <div className="mt-5">
                                                                            {/* <label className="col-form-label">File Upload</label> */}
                                                                            <div className="upload-input">
                                                                                <input className="form-control" type="file" name="upload" id="upload" onChange={readUploadFile} accept=".xlsx, .xls, .csv"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }

                                                            { 
                                                                activeStep === 1 && 
                                                                <UserImportedData 
                                                                    columnToField={columnToField} 
                                                                    collectionKeys={collectionKeys} 
                                                                    onChangeSelect={onChangeSelect}
                                                                    getValue={getValue}
                                                                /> 
                                                            }

                                                            { 
                                                                activeStep === 2 && 
                                                                <UserImportedSummary 
                                                                    columnToField={columnToField}
                                                                    validate_excel={validate_excel}
                                                                />
                                                            }

                                                            {/* Step {activeStep + 1} */}
                                                    
                                                            {/* { isStepOptional(activeStep) && <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}> Skip</Button> } */}
                                                            
                                                            <div className="d-flex justify-content-between mt-5 px-4">

                                                                {
                                                                    (activeStep === 1 || activeStep === 2) && <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>Back</Button>
                                                                }

                                                                {
                                                                    // activeStep === 0 && <Button onClick={handleNext}>Next</Button>
                                                                }
                                                                {
                                                                    activeStep === 1 && <Button onClick={handleNext}>Next</Button> 
                                                                }

                                                                {
                                                                    activeStep === 2 && <Button onClick={handleNext}>Finish</Button> 
                                                                }

                                                                {/* <Button onClick={handleNext}> { activeStep === steps.length - 1 ? 'Finish' : 'Next' }</Button> */}
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            </div>
                                        </Box>
                                    }
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