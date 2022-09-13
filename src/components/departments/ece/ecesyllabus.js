import React, { useEffect, useState } from "react"
import Table from "../../table"
import { TabPage } from "../../styles/tabpage"
import Courseug from "./btech"
import Coursepg from "./ece-mtech"
import Coursedd from "./ecedd.js"
import ECEPhd from "./ece-phd"
import main from "../img/book.svg"
import { PageLayout } from "../../styles/pagelayout"

const Ecesyllabus = props => {
  const [course, setCourse] = useState("programmesug")
  const [syllabus, setSyllabus] = useState(Courseug)
  return (
    <> 
     <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
    <TabPage>
          <div className="mainDiv syllabus-page" style={{width: "90vw"}}>
            <div className="row rowmarl3">
              <div className="digital">
                <h1 style={{ marginBottom: `1rem` }}>Syllabus</h1>
                <h2 data-aos="zoom-in-right">
                    {" "}
                    -Electronics And Electrical Engineering
                  </h2>

                <div className="probutton">
                  <button
                    onClick={() => {
                      setCourse("programmesug")
                      setSyllabus(Courseug)
                    }}
                    className={course == "programmesug" ? "btnactive" : ""}
                  >
                    UG Courses
                  </button>
                  <button
                    onClick={() => {
                      setCourse("programmespg")
                      setSyllabus(Coursepg)
                    }}
                    className={course == "programmespg" ? "btnactive" : ""}
                  >
                    M.Tech Courses
                  </button>
                  <button
                    onClick={() => {
                      setCourse("programmesphd")
                      setSyllabus(ECEPhd)
                    }}
                    className={course == "programmesphd" ? "btnactive" : ""}
                  >
                    PhD Courses
                  </button>
                  <button
                    onClick={() => {
                      setCourse("programmesdd")
                      setSyllabus(Coursedd)
                    }}
                    className={course == "programmesdd" ? "btnactive" : ""}
                  >
                    Dual Degree
                  </button>
                </div>
              </div>
            </div>

            
            {
              (syllabus === Coursedd) &&
              <ul>
                <li><a href="/"> Electronics and Communication Engineering with Specialization in Microelectronics and VLSI System Design (5 Years, Bachelor and Master of Technology (Dual Degree))</a></li>
              </ul>
            }
            {
              (syllabus === Coursedd) || 
            <Table style={{width:"100%", marginTop:"20px"}}>
              <br />
              <tr className="syllabus-table-head">
                <th>Dept.</th>
                <th>Sem/Electives</th>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>L</th>
                <th>T</th>
                <th>P</th>
                <th>Credits</th>
              </tr>
              {syllabus.map(elem => (
                <tr className="syllabus-table-row">
                  <td>{elem.deptt}</td>
                  <td>{elem.sem_elect || "-"}</td>
                  <td>{elem.course_code || "-"}</td>
                  <td>
                    <a href={elem.url}>{elem.course_title}</a>
                  </td>
                  <td>{elem.l}</td>
                  <td>{elem.t}</td>
                  <td>{elem.p}</td>
                  <td>{elem.credits}</td>
                </tr>
              ))}
            </Table>
            }
          </div>
        </TabPage>
        </PageLayout>
      {/* <PageLayout style={{ marginTop: `10vh`, marginBottom: `15vh` }}>
      <TabPage>
        <div className="syllabus-page mainDiv">
          <div className="layoutrow layoutrowmain syllabus-page-head">
            <div className="col-6">
              <div className="row rowmarl3">
                <h1 data-aos="zoom-in-right">Syllabus</h1>
              </div>
              <div className="row rowmarl3">
                <h2 data-aos="zoom-in-right">
                  {" "}
                  -Electronics and Communication Engineering
                </h2>
              </div>
            </div>
          </div>
          <Table>
            <tr className="syllabus-table-head">
              <th>Sem/Electives</th>
              <th>Category</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>L</th>
              <th>T</th>
              <th>P</th>
              <th>Credits</th>
            </tr>
            {Course.map(elem => (
              <tr className="syllabus-table-row">
                <td>{elem.sem_elect}</td>
                <td>{elem.category}</td>
                <td>{elem.course_code}</td>
                <td>
                  <a href={elem.url}>{elem.course_title}</a>
                </td>
                <td>{elem.l}</td>
                <td>{elem.t}</td>
                <td>{elem.p}</td>
                <td>{elem.credits}</td>
              </tr>
            ))}
          </Table>
        </div>
        </TabPage>
      </PageLayout> */}
    </>
  )
}
export default Ecesyllabus
