import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select from 'react-select';


const UserImportedData = ({ excelData, collectionKeys, onChangeSelect }: any) => {


    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-4 mb-3"><h5>Excel Columns with sample data</h5></div>
                <div className="col-1"></div>
                <div className="col-4 mb-1"><h5>Data center fields</h5></div>
            </div>

            {
                Object.entries(excelData[0]).map(([column, val]: any) => {
                    return (
                        <div className="row d-flex justify-content-center" key={column}>
                            <Accordion className="col-4 mb-3">
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id={column}>
                                    <Typography>{column}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className="text-secondary">{val}</Typography>
                                </AccordionDetails>
                            </Accordion>
                            
                            <div className="col-1"></div>

                            <div className="col-4 mb-1">
                                <Select onChange={e => onChangeSelect(e, column)} options={collectionKeys} isSearchable={true}/>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}


export default  UserImportedData;