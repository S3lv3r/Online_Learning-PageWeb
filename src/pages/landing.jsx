import CardInformation from "../components/cards/cards";
import Header from "../components/header";
import NewPrincipal from "../components/new-principal/new-principal";
import ButtonStyled from "../components/ui/button-styled";
import NewArticle from "../components/new-article/new-article";

import { } from "@fortawesome/free-regular-svg-icons";
import { faUserGroup, faFileAlt, faCalendar, faPlay, faGridVertical, faForward, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./landing-style.css"

import google from "../assets/google-logo.svg"
import netflix from "../assets/netflix-logo.svg"
import airbnb from "../assets/airbnb-logo.svg"
import amazon from "../assets/amazon-logo.svg"
import facebook from "../assets/facebook-logo.svg"
import grab from "../assets/grab-logo.svg"
import girl_img from "../assets/img-girl-smile.png"
import group_img from "../assets/img-group-students.png"
import CardImg from "../components/card-img/cards-img";
import classroom from "../assets/classroom_video.svg"
import user_interface from "../assets/user-interface.svg"
import tools_girl from "../assets/girl-books.svg"
import quiz from "../assets/questions.svg"
import class_manage from "../assets/class.svg"
import discussions from "../assets/descussions.svg"
import tools from "../assets/tools.svg"
import review from "../assets/review.svg"
import new_1 from "../assets/new-1.png"
import new_2 from "../assets/new-2.png"
import new_3 from "../assets/new-3.png"
import new_4 from "../assets/new-4.png"





function Landing() {
    return (
        <>
            <div className="landing">
                <div className="landing-companys">
                    <p>Trusted by 5,000+ Companies Worldwide</p>
                    <div className="landing-companys-logos">
                        <img src={google} alt="google" />
                        <img src={netflix} alt="netflix" />
                        <img src={airbnb} alt="airbnb" />
                        <img src={amazon} alt="amazon" />
                        <img src={facebook} alt="facebook" />
                        <img src={grab} alt="grab" />
                    </div>
                </div>
                <div className="landing-allone">
                    <div className="landing-allone-content">
                        <span>All-In-One <strong>Cloud Software.</strong></span>
                        <p>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
                    </div>
                    <div className="landing-allone-cards">
                        <CardInformation
                            title={
                                <>
                                    Online Billing, <br />
                                    Invoicing, & Contracts
                                </>
                            }
                            text="Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts"
                            icon={faFileAlt}
                            iconColor={"#5B72EE"}
                        />
                        <CardInformation
                            title={
                                <>
                                    Easy Scheduling & <br />
                                    Attendance Tracking
                                </>
                            }
                            text="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
                            icon={faCalendar}
                            iconColor={"#F48C06"}
                        />
                        <CardInformation
                            title={
                                <>
                                    Customer Tracking
                                </>
                            }
                            text="Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization "
                            icon={faUserGroup}
                            iconColor={"#29B9E7"}
                        />
                    </div>
                </div>
                <div className="landing-whatis">
                    <div className="landing-whatis-content">
                        <span>What is <strong>Skilline?</strong></span>
                        <p>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                    </div>
                    <div className="landing-whatis-img">
                        <CardImg
                            CIimg={girl_img}
                            CItitle={"FOR INSTRUCTORS"}
                            BStext={"Start a class today"}
                            BSborder={"1px solid #fff"}
                            BStextColor={"#fff"}
                        />
                        <CardImg
                            CIimg={group_img}
                            CItitle={"FOR STUDENTS"}
                            BStext={"Enter access code"}
                            BSborder={"1px solid #fff"}
                            BStextColor={"#fff"}
                        />

                    </div>
                </div>
                <div className="landing-cando">
                    <div className="landing-cando-content">
                        <span>Everything you can do in a physical classroom,<strong>you can do with Skilline</strong></span>
                        <p>Skilline's school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                        <a>Learn more</a>
                    </div>
                    <div className="landing-cando-video">
                        <img src={classroom} alt="" />
                        <button className="-cando-video-btn"><FontAwesomeIcon icon={faPlay} className="-cando-video-icon" /></button>
                    </div>
                </div>

                <div className="landing-features" id="features">
                    <div className="landing-features-content">
                        <span>Our <strong>Features</strong></span>
                        <p>This very extraordinary feature, can make learning activities more efficient</p>
                    </div>
                    <div className="landing-features-user">
                        <img src={user_interface} alt="" />
                        <div className="landing-features-user-content">
                            <span>A <strong>user interface</strong> designed for the classroom</span>
                            <div className="landing-features-user-content-preobj">
                                <div className="landing-features-user-content-obj">
                                    <div className="-obj-icon">
                                        <FontAwesomeIcon icon={faGridVertical} className="-obj-icon-fa" />
                                    </div>
                                    <p>Teachers don't get lost in the grid view and have a dedicated Podium space.</p>
                                </div>

                                <div className="landing-features-user-content-obj">
                                    <div className="-obj-icon">
                                        <FontAwesomeIcon icon={faForward} className="-obj-icon-fa" />
                                    </div>
                                    <p>TA's and presenters can be moved to the front of the class.</p>
                                </div>

                                <div className="landing-features-user-content-obj">
                                    <div className="-obj-icon">
                                        <FontAwesomeIcon icon={faPeopleGroup} className="-obj-icon-fa" />
                                    </div>
                                    <p>Teachers can easily see all students and class data at one time.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="landing-features-tools">
                        <div className="landing-features-tools-content">
                            <div className="-tools-content-text">
                                <span><strong>Tools</strong> For Teachers And Learners</span>
                                <p>Class has a dynamic set of teaching tools built to be deployed and used during class.
                                    Teachers can handout assignments in real-time for students to complete and submit.</p>
                            </div>
                        </div>
                        <img src={tools_girl} alt="" />

                    </div>



                    <div className="landing-features-quizzes">
                        <img src={quiz} alt="" />
                        <div className="landing-features-quizzes-content">
                            <div className="-quizzes-content-text">
                                <span>Assessment,<br></br><strong>Quizzes</strong>, Tests</span>
                                <p>Easily launch live assignments, quizzes, and tests.
                                    Student results are automatically entered in the online gradebook.</p>
                            </div>
                        </div>
                    </div>

                    <div className="landing-features-class">
                        <div className="landing-features-class-content">
                            <div className="-class-content-text">
                                <span><strong>Class Management</strong><br></br> Tools for Educators</span>
                                <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook,
                                    teachers can review and grade tests and quizzes in real-time.
                                </p>
                            </div>
                        </div>
                        <img src={class_manage} alt="" />
                    </div>

                    <div className="landing-features-discussions">
                        <img src={discussions} alt="" />
                        <div className="landing-features-discussions-content">
                            <div className="-discussions-content-text">
                                <span>One-on-One <br></br><strong>Discussions</strong></span>
                                <p>
                                    Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="landing-features-btn">

                        <ButtonStyled
                            text={"See more features"}
                            textColor={"#F48C06"}
                            border={"1px solid #F48C06"}
                        />
                    </div>

                </div>

                <div className="landing-integrations">
                    <div className="landing-integrations-elements">
                        <img src={tools} alt="" />
                        <div className="landing-integrations-content">
                            <h3>────     INTEGRATIONS</h3>
                            <span>200+ educational tools and<br></br>platform <strong>integrations</strong></span>
                            <p>
                                Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
                            </p>
                            <div className="landing-integrations-content-btn">
                                <ButtonStyled
                                    text={"See All Integrations"}
                                    border={"1px solid #F48C06"}
                                    textColor={"#F48C06"}
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="landing-testimonial" id="testimonial">  
                    <div className="landing-testimonial-elements">
                        <div className="landing-testimonial-content">
                            <h3>────     TESTIMONIAL</h3>
                            <span>What They Say?</span>
                            <p>
                                Skilline has got more than 100k positive<br></br> ratings from our users around the world. <br /> <br></br>
                                Some of the students and teachers were<br></br> greatly helped by the Skilline. <br /> <br></br>
                                Are you too? Please give your assessment
                            </p>
                            <div className="landing-testimonial-content-btn">
                                <ButtonStyled
                                    text={"Write your assessment"}
                                    border={"1px solid #F48C06"}
                                    textColor={"#F48C06"}
                                />
                            </div>
                        </div>
                        <img src={review} alt="" />
                    </div>
                </div>

                <div className="landing-news" id="news">
                    <div className="landing-news-content">
                        <span>Lastest News and Resources</span>
                        <p>See the developments that have occurred to Skillines in the world</p>
                    </div>
                    <div className="landing-news-articles">
                        <div className="landing-news-articles-principal">
                            <NewPrincipal
                                FrontImage={new_4}
                                Topic={"NEWS"}
                                Title={"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"}
                                Resume={"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."}
                            />
                        </div>
                        <div className="landing-news-articles-many">
                            <NewArticle
                                FrontImage={new_1}
                                Topic={"PRESS RELEASE"}
                                Title={"Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand"}
                                Resume={"Class Technologies Inc., the company that created Class,..."}
                            />
                            <NewArticle
                                FrontImage={new_2}
                                Topic={"NEWS"}
                                Title={"Zoom's earliest investors are betting millions on a better Zoom for schools"}
                                Resume={"Zoom was never created to be a consumer product. Nonetheless, the..."}
                            />
                            <NewArticle
                                FrontImage={new_3}
                                Topic={"NEWS"}
                                Title={"Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms"}
                                Resume={"This year, investors have reaped big financial returns from betting on Zoom..."}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing