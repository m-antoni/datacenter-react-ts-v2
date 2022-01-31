
const UserImportedSummary = ({ columnToField }: any) => {

   

    return (
        <>
           <div className="row d-flex justify-content-center">
               <div className="col-12 col-sm-6 col-lg-6">
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