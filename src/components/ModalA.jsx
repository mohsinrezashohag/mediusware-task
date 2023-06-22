import React from 'react';

const ModalA = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div class="modal fade" id="modalB" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden={openModal}>
            <div class="modal-dialog">
                <div class="modal-content">

                    <div className='modal-header d-flex justify-content-between'>
                        <div>
                            <button className="btn btn-lg btn-outline-primary mx-2" style={{ backgroundColor: '#46139f', color: 'white' }} type="button" data-bs-toggle="modal" data-bs-target="#modalA">All Contacts</button>
                            <button className="btn btn-lg btn-outline-primary" style={{ backgroundColor: '#ff7f50', color: 'white' }} type="button" data-bs-toggle="modal" data-bs-target="#modalB">Us Contacts</button>
                        </div>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close❌</button>
                    </div>




                    <div class="modal-body">

                        <ul>
                            {filteredUsContacts.map(item => <li className='py-1' key={item.phone}>
                                <div className='d-flex justify-content-between px-5'>
                                    <p>{item.phone}</p>
                                    <button className='btn btn-primary'>see details</button>
                                </div>
                            </li>)}
                        </ul>


                    </div>





                    <div class="modal-footer">
                        <input onChange={e => setIsEven(e.target.checked)} id='even' name='even' type="checkbox" value="only even" />
                        <label htmlFor="even">Only even</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ModalA;