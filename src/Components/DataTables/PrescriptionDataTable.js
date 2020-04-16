import React, { useContext, useState } from 'react';
import { DataContext } from '../../App';
import PrescriptionModal from '../Dashboard/PrescriptionModal';

const PrescriptionDataTable = () => {
    const ContextData = useContext(DataContext);
    const [selectAppointment, setSelectAppointment] = useState(null);
    const [modalIsOpen,setModalIsOpen] = useState(false);
    // const [availableAppointmentsOfTheDay , setAvailableAppointmentsOfTheDay] = useState([]);

    
        // const formatedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        // const bookedAppointmentsId = allBookedAppointments.filter(bookedAp => bookedAp.date === formatedDate && bookedAp.status === 1)
        //                             .map(ap => ap.apId)
        
        // const availableAppointmentsOfTheDay = [...allAppointments]; 
        
        // for (let i = 0; i < allAppointments.length; i++) {        
        //     for (let j = 0; j < bookedAppointmentsId.length; j++) {
        //         if(allAppointments[i].id === bookedAppointmentsId[i] ){
        //             availableAppointmentsOfTheDay[i].totalSpace =  availableAppointmentsOfTheDay[i].totalSpace - 1;
        //         }
        //     }
    const openPrescriptionModal = (apId) => {
        setModalIsOpen(true);
        const selectedAp = ContextData.allBookedAppointments.find(ap => ap.apId === apId)
        setSelectAppointment(selectedAp);
    }

    const prescriptedAppointments = ContextData.allBookedAppointments.filter(ap => ap.prescription)

    let srNo = 1;
    return (
        <>
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Date</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Contact</th>
                <th className="text-secondary text-center" scope="col">Prescription</th>
                </tr>
            </thead>
            <tbody>
                {
                  prescriptedAppointments.map(ap => 

                        <tr>
                        <td>{srNo++}</td>
                        <td>{ap.date}</td>
                        <td>{ap.patientInfo.name}</td>
                        <td>{ap.patientInfo.phone}</td>
                        <td className="text-center">
                            <button onClick={()=> openPrescriptionModal(ap.apId)} className="btn btn-primary">View</button>
                        </td>
         
                    </tr>
                    )
                }
            
                
            </tbody>
        </table>

        <PrescriptionModal 
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        selectAppointment={selectAppointment}
        setSelectAppointment={setSelectAppointment}/>
        </>
        
        
    );
};


export default PrescriptionDataTable;