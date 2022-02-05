import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select from 'react-select';
import { useEffect } from 'react';

const UserImportedData = ({ collectionKeys, onChangeSelect, columnToField, getValue }: any) => {


    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-4 mb-3"><h5>Excel Columns with sample data</h5></div>
                <div className="col-1"></div>
                <div className="col-4 mb-1"><h5>Data center fields</h5></div>
            </div>

            {
                columnToField.map((data :any, index: any) :any => {
                    return (
                        <div className="row d-flex justify-content-center" key={index}>
                            <Accordion className="col-4 mb-3">
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id={index}>
                                    <Typography>{data.column}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className="text-secondary">{data.sample_data}</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <div className="col-1"></div>
                            <div className="col-4 mb-1">
                                <Select 
                                    value={getValue(collectionKeys, data.set_field)}  
                                    onChange={e => onChangeSelect(e, index)} 
                                    options={collectionKeys} 
                                    isSearchable
                                    placeholder="Select fields here..."
                                />
                            </div>
                        </div>
                    )
                })
            }
            {/* Hard coded location country */}
            <div className="row d-flex justify-content-center">
                <Accordion className="col-4 mb-3">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
                        <Typography>Location Country</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="text-secondary">united states</Typography>
                    </AccordionDetails>
                </Accordion>
                <div className="col-1"></div>
                <div className="col-4 mb-1">
                    <Select value={{ value: "location_country", label: "location_country"}} isDisabled/>
                </div>
            </div>
        </>
    )
}


export default  UserImportedData;