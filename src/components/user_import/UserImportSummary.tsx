
const UserImportedSummary = ({ columnToField, validate_excel }: any) => {

    console.log(validate_excel)

    return (
        <>
           <div className="row d-flex justify-content-center">
               <div className="col-12 col-sm-7 col-lg-7">

                    {
                        validate_excel && 
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <b>Error! LinkedIn user(s) already in the database</b>
                            <hr />
                            { validate_excel.map((user:any) => <>{user.linkedin_url}<br/></>) }
                        </div>   
                    } 

                    <table className="table table table-striped mb-4">
                        <thead>
                            <tr>
                                <th scope="col">Excel Headers</th>
                                <th scope="col">Field Selected</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                columnToField.map((data :any, index: any) :any => {
                                    return (
                                        <tr key={index}>
                                            <td className="mnwd">{data.column}</td>
                                            <td>{data.set_field}</td>
                                        </tr> 
                                    )
                                })
                            }
                            <tr>
                                <td className="mnwd">Location Country</td>
                                <td>location_country</td>
                            </tr> 
                        </tbody>
                    </table>
               </div>
           </div>
        </>
    )
}


export default  UserImportedSummary;