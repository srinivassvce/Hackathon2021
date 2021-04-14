import * as React from 'react';
import { deleteSharedRecord, getAllSentSharedRecords, getDoctorOrPatientDetails, getPatientByEmail, getSharedRecordById, saveSharedRecords } from '../api';
import Page from '../common/page';
import { Patient, SharedRecordModel } from '../_gen/entity';

export interface ShareHealthRecordProps {
    patientId: string;
}

const ShareHealthRecord: React.FunctionComponent<ShareHealthRecordProps> = ({ patientId }) => {

    const [sharedRecord, setSharedRecord] = React.useState<SharedRecordModel>(
        {
            sharedRecordId: -1,
            patientId: -1,
            sharedEmail: "",
            sharedName: "",
            sharedDate: new Date()
        }
    );

    const [sharedEmail, setEmail] = React.useState("");

    const [sharedRecords, setSharedRecords] = React.useState<SharedRecordModel[]>([]);

    React.useEffect(() => {
        getAndSetRecords();
        getAndSetPatient();
        //getAndDeleteShare();
    }, []);

    const getAndSetRecords = async () => {
        const sharedRecords: SharedRecordModel[] = await getAllSentSharedRecords(patientId);
        setSharedRecords([...sharedRecords]);
    }

    const getAndSetPatient = async () => {
        const sharedRecord = await getDoctorOrPatientDetails(sharedEmail);
        setSharedRecord(sharedRecord);
    };

    const getAndDeleteShare = async (id: number) => {
        const isDeleted = await deleteSharedRecord(id);
        if(isDeleted.toString() === "false"){
            alert("Emergency Contact can't be deleted!!!");
        } else {
            const newSharedRecords = sharedRecords.filter(
                (record) => {
                    return record.sharedRecordId !== id;
                }
            );
            setSharedRecords([...newSharedRecords]);
        }   
    };

    const handleSearch: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault();
        getAndSetPatient();
    };

    const handleShare: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if (sharedRecord.patientId.toString().localeCompare(patientId) === 0) {
            alert("You can't share with yourself!!!");
        } else {
            const record = await saveSharedRecords(sharedRecord, patientId);
            setSharedRecord({ ...record });
            setSharedRecords([...sharedRecords, record]);
        }
    };

    const handleDelete = async (event: any, id: number) => {
        event.preventDefault();
        getAndDeleteShare(id);
    };

    const renderSharedRecordRows = () => {
        return (
            <tbody>
                {sharedRecords.map(
                    record =>
                    (
                        <tr>
                            <th scope={"row"}>{record.sharedName}</th>
                            <td>{record.sharedEmail}</td>
                            <td>{new Date(record.sharedDate).toDateString()}</td>
                            <button className="btn btn-info btn-danger m-1"
                                onClick={(e: any) => handleDelete(e, record.sharedRecordId)}
                                value={record.sharedRecordId}>
                                Delete
                            </button>
                        </tr>
                    )
                )}
            </tbody>
        );
    };

    return (
        <React.Fragment>
            <Page title="Share Records" id={patientId} >
                <div className="container">
                    <div className="col-md-6">
                        <label htmlFor="email" className="text-info">
                            Search Email
                    </label>
                        <form className="form" onSubmit={handleShare}>
                            <div className="input-group m-1">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="form-control m-1"
                                    value={sharedEmail}
                                    placeholder={"Email"}
                                    onChange={(e) => setEmail(e.target.value)}>
                                </input>
                                <button
                                    className="btn btn-info btn-warning m-1"
                                    onClick={handleSearch}>
                                    Search
                                </button>
                            </div>
                            <div>
                                <span style={{ fontSize: 25, fontWeight: "bold", color: "blue" }}>
                                    Share with: {sharedRecord.sharedName}
                                </span>
                            </div>
                            <br />
                            <div>
                                <button
                                    className="btn btn-info btn-dark">
                                    Share
                                </button>
                            </div>
                        </form>

                        <br />
                    </div>
                    <hr />
                    <div className={"row text-info display-4 m-2"}>
                        Shared History
                    </div>
                    <table className={"table table-hover table-striped"}>
                        <thead className={"thead-light"}>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date of Share</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        {renderSharedRecordRows()}
                    </table>
                </div>
            </Page>
        </React.Fragment>
    );
}

export default ShareHealthRecord;

