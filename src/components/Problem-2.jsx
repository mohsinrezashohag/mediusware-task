import React, { useEffect, useState } from 'react';
import { Modal } from 'bootstrap';

const Problem2 = () => {

    // all contacts
    const [allContacts, setAllContacts] = useState([])
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => setAllContacts(data.results))
    }, [])

    //us contacts
    const [usContacts, setUsContacts] = useState([])
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/country-contacts/united%20states/')
            .then(res => res.json())
            .then(data => setUsContacts(data.results))
    }, [])

    // even filter
    const [isEven, setIsEven] = useState(false)
    const filteredAllContacts = isEven ? allContacts.filter(item => item.phone[1] % 2 === 0) : allContacts
    const filteredUsContacts = isEven ? allContacts.filter(item => item.phone[1] % 2 === 0) : usContacts



    // phone details
    const [phone, setPhone] = useState(null)
    let phoneDetails
    if (phone && filteredAllContacts) {
        phoneDetails = filteredAllContacts.find(item => item.phone === phone)
    }
    if (phone && filteredUsContacts) {
        phoneDetails = filteredUsContacts.find(item => item.phone === phone)
    }

    // search functionality
    const [searchText, setSearchText] = useState('')




    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#modalA">All Contacts</button>
                    <button className="btn btn-lg btn-outline-secondary" type="button" data-bs-toggle="modal" data-bs-target="#modalB">Us Contacts</button>
                </div>


                {/* my code start */}


                <div>


                    {/* modal a */}

                    <div className='d-flex justify-content-between'>
                        <div class="modal fade" id="modalA" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <div className='modal-header d-flex flex-column  '>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <button className="btn btn-lg btn-outline-primary mx-2" style={{ backgroundColor: '#46139f', color: 'white' }} type="button" data-bs-toggle="modal" data-bs-target="#modalA">All Contacts</button>
                                                <button className="btn btn-lg btn-outline-primary" style={{ backgroundColor: '#ff7f50', color: 'white' }} type="button" data-bs-toggle="modal" data-bs-target="#modalB">Us Contacts</button>
                                            </div>
                                            <button type="button" className="btn btn-primary mx-2" style={{ backgroundColor: "white", border: '2px solid #46139f', color: 'black' }} data-bs-dismiss="modal">Close❌</button>
                                        </div>


                                        <div className='py-3'>
                                            <input onChange={e => setSearchText(e.target.value)} type="text" className='py-2 px-30' placeholder='Type number here for search' />
                                        </div>

                                    </div>

                                    <div class="modal-body">

                                        <ul>
                                            {filteredAllContacts.filter(item => item.phone.includes(searchText)).map(item => <li className='py-1' key={item.phone}>
                                                <div className='d-flex justify-content-between px-5'>
                                                    <p>{item.phone}</p>
                                                    <button onClick={() => setPhone(item.phone)} className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalC" data-bs-dismiss="modalA">see details</button>

                                                </div>
                                            </li>)}
                                        </ul>

                                    </div>


                                    <div class="modal-footer d-flex justify-content-start">
                                        <div>
                                            <input className='mx-2' onChange={e => setIsEven(e.target.checked)} id='even' name='even' type="checkbox" value="only even" />
                                            <label htmlFor="even">Only even</label></div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/* modal c */}
                        <div class="modal fade" id="modalC" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <div className='modal-header d-flex flex-column'>
                                        <h5>Details Of Number : <span className='text-primary'>{phone}</span></h5>
                                        <h6>Country:<span className='text-primary'>{phoneDetails?.country?.name}</span>
                                        </h6>
                                    </div>



                                </div>
                            </div>
                        </div>


                    </div>








                    {/* modal b */}
                    <div class="modal fade" id="modalB" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div className='modal-header d-flex flex-column  '>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <button className="btn btn-lg btn-outline-primary mx-2" style={{ backgroundColor: '#46139f', color: 'white' }} type="button" data-bs-toggle="modal" data-bs-target="#modalA">All Contacts</button>
                                            <button className="btn btn-lg btn-outline-primary" style={{ backgroundColor: '#ff7f50', color: 'white' }} type="button" data-bs-toggle="modal" data-bs-target="#modalB">Us Contacts</button>
                                        </div>
                                        <button type="button" className="btn btn-primary mx-2" style={{ backgroundColor: "white", border: '2px solid #46139f', color: 'black' }} data-bs-dismiss="modal">Close❌</button>
                                    </div>


                                    <div className='py-3'>
                                        <input onChange={e => setSearchText(e.target.value)} type="text" className='py-2 px-30 ' placeholder='Type number here for search' />
                                    </div>

                                </div>




                                <div class="modal-body">

                                    <ul>
                                        {filteredUsContacts.filter(item => item.phone.includes(searchText)).map(item => <li className='py-1' key={item.phone}>
                                            <div className='d-flex justify-content-between px-5'>
                                                <p>{item.phone}</p>
                                                <button onClick={() => setPhone(item.phone)} className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalC" data-bs-dismiss="modalA">see details</button></div>
                                        </li>)}
                                    </ul>


                                </div>





                                <div class="modal-footer d-flex justify-content-start">
                                    <div>
                                        <input className='mx-2' onChange={e => setIsEven(e.target.checked)} id='even' name='even' type="checkbox" value="only even" />
                                        <label htmlFor="even">Only even</label></div>
                                </div>

                            </div>
                        </div>


                        <div class="modal fade" id="modalC" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <div className='modal-header d-flex flex-column'>
                                        <h5>Details Of Number : <span className='text-primary'>{phone}</span></h5>
                                        <h6>Country:<span className='text-primary'>{phoneDetails?.country?.name}</span></h6>
                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>




                </div>
                {/* my code end*/}

            </div>
        </div>
    );
};

export default Problem2;