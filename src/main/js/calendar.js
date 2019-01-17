var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

var userId = 1;

export default class Celender extends React.Component {
    renderPage(route, navigator) {
        route.props = route.props || {};
        route.props.navigator = navigator;

        return React.createElement(route.component, route.props);
    }


    render() {
        return (
            <Ons.Navigator initialRoute={{ component: calen, props: { key: 'calen' } }} renderPage={this.renderPage} />
        );
    }
}

class calen extends React.Component {


    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className="center">ปฏิทิน</div>
            </Ons.Toolbar>
        );
    }
    pushPageMemuEvent() {
        this.props.navigator.pushPage({ component: EventMain, props: { key: 'event-menu' } });
    }
    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar} modifi>
            <h2>เดือนกุมภาพันธ์</h2>
                <Ons.Row>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon style={{ color: '#f7f8f9' }}>1</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>พฤหัสบดี</h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>

                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>2</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}> ศุกร์  </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>

                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>3</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}> เสาร์ </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>4</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>อาทิตย์ </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>5</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}> จันทร์ </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>6</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>อังคาร </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>7</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>  พุธ  </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>8</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>พฤหัสบดี</h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>9</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}> ศุกร์  </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>10</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}> เสาร์ </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>11</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>อาทิตย์ </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>12</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}> จันทร์ </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>13</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>อังคาร </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>14</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>  พุธ  </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>15</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>พฤหัสบดี</h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>16</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}> ศุกร์  </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>17</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}> เสาร์ </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>18</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>อาทิตย์ </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>19</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}> จันทร์ </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>20</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}> อังคาร </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>21</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>  พุธ  </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>22</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>พฤหัสบดี</h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>23</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}> ศุกร์  </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>24</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}> เสาร์ </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>25</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>อาทิตย์ </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>26</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}> จันทร์ </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>27</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>อังคาร </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    <Ons.Col>
                        <div>
                            <Ons.Card onClick={this.pushPageMemuEvent.bind(this)}>
                                <div style={{ fontSize: '20px', backgroundColor: '#195fb5', textAlign: 'center' }}>
                                    <Ons.Icon  style={{ color: '#ffffff' }}>28</Ons.Icon>
                                </div>
                                <h3 style={{ color: '#195fb5' }}>  พุธ  </h3>
                            </Ons.Card>
                        </div>
                    </Ons.Col>
                    

                </Ons.Row>
            </Ons.Page>
        );
    }



}



class EventMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = { calendars: [] };
        this.getEvent();

    }

    refreshPage() {
        client({ method: 'GET', path: '/api/calendars' }).done(response => {
            this.setState({ calendars: response.entity._embedded.calendars });
        });
    }

    pushPageCreateEvent() {
        this.props.navigator.pushPage({ component: CreateEventMenu, props: { key: 'create-event' } });
    }



    pushPageEventSubmit() {
        this.props.navigator.pushPage({ component: EventSubmit, props: { key: 'sum-event' } });
    }
    

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='center'>ปฎิทิน(กิจกรรม)</div>
                <div className='left'  ><Ons.BackButton
                >
                    Back
                </Ons.BackButton>
                </div>
            </Ons.Toolbar>
        );
    }

    getEvent() {
        client({ method: 'GET', path: '/api/calendars' }).done(response => {
            this.setState({ calendars: response.entity._embedded.calendars });
        });
    }

    renderRowDonation(row) {
            return (
                <Ons.ListItem key={row._links.self.href}>
                    <Ons.Card>
                        <div style={{ borderColor: '#f55959' }} >
                            <h5>{row.title}</h5> 
                            {row.dateTime}
                        </div>
                    </Ons.Card>
                </Ons.ListItem>
            )
        
    }

    // renderRowConcert(row) {
    //     if (row.type === 'concert') {
    //         return (
    //             <Ons.ListItem key={row._links.self.href}>
    //                 <Ons.Card>
    //                     <div style={{ borderColor: '#f55959' }} >
    //                         <h5>{row.title}</h5> {row.type}
    //                         {row.description}
    //                     </div>
    //                 </Ons.Card>
    //             </Ons.ListItem>
    //         )
    //     }
    // }

    // renderRowLiveShow(row) {
    //     if (row.type === 'liveshow') {
    //         return (
    //             <Ons.ListItem key={row._links.self.href}>
    //                 <Ons.Card>
    //                     <div style={{ borderColor: '#f55959' }} >
    //                         <h5>{row.title}</h5> {row.type}
    //                         {row.description}
    //                     </div>
    //                 </Ons.Card>
    //             </Ons.ListItem>
    //         )
    //     }
    // }


    // renderRowSeminar(row) {
    //     if (row.type === 'seminar') {
    //         return (
    //             <Ons.ListItem key={row._links.self.href}>
    //                 <Ons.Card>
    //                     <div style={{ borderColor: '#f55959' }} >
    //                         <h5>{row.title}</h5> {row.type}
    //                         {row.description}
    //                     </div>
    //                 </Ons.Card>
    //             </Ons.ListItem>
    //         )
    //     }
    // }



    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar} modifi>
                <Ons.SpeedDial position='bottom right'>
                    {/* <Ons.Fab>
                    <Ons.Icon icon='fa-bars' />
                </Ons.Fab> */}
                    <Ons.Fab onClick={this.pushPageCreateEvent.bind(this)}>
                        <Ons.Icon icon='fa-plus-square-o' />
                    </Ons.Fab>

                </Ons.SpeedDial>
                <h2>กิจกรรม</h2>
                <Ons.Row>
                    <Ons.Col>
                        <Ons.List dataSource={this.state.calendars}
                            renderRow={this.renderRowDonation.bind(this)}
                            // onClick={this.pushPageEventSubmit.bind(this)} 
                            />
                    </Ons.Col>
                    {/* <Ons.Col>
                        <Ons.List dataSource={this.state.calendars}
                           // renderRow={this.renderRowConcert.bind(this)}
                            onClick={this.pushPageEventSubmit.bind(this)} />
                    </Ons.Col>
                </Ons.Row>
                <Ons.Row>
                    <Ons.Col>
                        <Ons.List dataSource={this.state.calendars}
                            //renderRow={this.renderRowLiveShow.bind(this)}
                            onClick={this.pushPageEventSubmit.bind(this)} />
                    </Ons.Col>
                    <Ons.Col>
                        <Ons.List dataSource={this.state.calendars}
                            //renderRow={this.renderRowSeminar.bind(this)}
                            onClick={this.pushPageEventSubmit.bind(this)} />
                    </Ons.Col> */}
                </Ons.Row>
                <Ons.Button
                    style={{ margin: '5px' }}
                    onClick={this.refreshPage.bind(this, navigator)}>
                    Refresh
                </Ons.Button>
            </Ons.Page>

        );
    }
}


class CreateEventMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eventTitle: '',
            eventDuration: '',
            //description: '',
            // eventType: 'donate',
            textReturn: ''
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        // this.handleDescChange = this.handleDescChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        // this.editSelects = this.editSelects.bind(this);
    }



    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='center'>ปฎิทิน(กิจกรรม)</div>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
            </Ons.Toolbar>
        );
    }


    handleTitleChange(e) {
        this.setState({ eventTitle: e.target.value });
    }

    // handleDescChange(e) {
    //     this.setState({ description: e.target.value });
    // }

    handleDateChange(e) {
        this.setState({ eventDuration: e.target.value });
    }

    // editSelects(event) {
    //     this.setState({ eventType: event.target.value });
    // }

    createEventList(title, type, dateTime) {
        return (
            client({ method: 'GET', path: '/event/' + userId + '/create/' + title + '/' + dateTime + '/' }).done(
                ons.notification.alert('Success!'),
                this.setState({ eventDuration: '' }),
                this.setState({ eventTitle: '' }),
                //this.setState({ description: '' })

            )
        );
    }

    popPage() {
        this.props.navigator.popPage();
    }

    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar}>
                <Ons.Row>
                    <Ons.Col>
                    </Ons.Col>
                    <Ons.Col>

                        <div style={{ marginBottom: '2em' }}>สร้างกิจกรรม</div>
                        <p> เรื่อง :
                                    <Ons.Input
                                modifier='underbar'
                                placeholder=''
                                value={this.state.eventTitle}
                                onChange={this.handleTitleChange} />
                        </p>
                        {/* <p> ทำอะไร:
                                    <Ons.Select  value={this.state.eventType} onChange={this.editSelects}>
                                        <option value="donate">Donate</option>
                                        <option value="concert">Concert</option>
                                        <option value="liveshow">LiveShow</option>
                                        <option value="seminar">Seminar</option>
                                    </Ons.Select>
                                </p> */}
                        <p> วันที่ :
                                    <Ons.Input
                                modifier='underbar' type='date'
                                placeholder='Event DateTime'
                                value={this.state.eventDuration}
                                onChange={this.handleDateChange} />
                        </p>
                        {/* <p> ทำอะไร :
                                    <Ons.Input
                                modifier='underbar'
                                placeholder=''
                                value={this.state.description}
                                onChange={this.handleDescChange} />
                        </p> */}
                        <div>
                            <Ons.Button
                                style={{ margin: '6px' }}
                                onClick={this.createEventList.bind(this, this.state.eventTitle, this.state.eventDuration)}>
                                สร้าง
                                     </Ons.Button>
                            <Ons.Button
                                style={{ margin: '5px' }}
                                onClick={this.popPage.bind(this, navigator)}>
                                กลับ
                                     </Ons.Button>
                        </div>



                    </Ons.Col>
                    <Ons.Col>
                    </Ons.Col>
                </Ons.Row>
            </Ons.Page>
        );
    }
}

class EventSubmit extends React.Component {

    constructor(props) {
        super(props);
        this.state = { calendars: [] };
        this.getEvent();

    }

    getEvent() {
        client({ method: 'GET', path: '/api/calendars' }).done(response => {
            this.setState({ calendars: response.entity._embedded.calendars });
        });
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='center'>Submit Event</div>
            </Ons.Toolbar>
        );
    }
    renderEventSubmit(row) {
        {
            return (
                <Ons.ListItem key={row._links.self.href}>
                    <Ons.Card>
                        <div>
                            <h5>{row.title}</h5>
                        </div>
                        value={this.state.calendars}
                    </Ons.Card>
                </Ons.ListItem>
            )
        }
    }

    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar}>
                <h2>no surprises!</h2>
                <Ons.List dataSource={this.state.calendars}
                    renderRow={this.renderEventSubmit.bind(this)} />
            </Ons.Page>
        );
    }
}
ReactDOM.render(<Celender />, document.getElementById('react'));