import React from "react";
import "./Team.css";
import { Row, Col } from "react-bootstrap";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Footer from './Footer';

const Team = () => {
  return (
    <div className="team_pg">
      <div>
        <Row>
          <Col>
            <h1 className="tpg_h">
              Unleashing the Potential of Wearable Robotics Together
            </h1>
          </Col>
          <Col>
            <img
              className="tpg_img"
              src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400"
            ></img>
          </Col>
        </Row>
      </div>
      <div className="team_head">
        <h1 className="tm_h">
          We are proud of our team members and their contributions to the field
          of wearable robotics. Together, we are committed to pushing
          boundaries, driving innovation, and transforming the future of
          assistive technologies.
        </h1>
        <h1 className="thh">Team Leaders</h1>
        <div className="tmm">
          <Row>
            <Col>
              <img src="prof1.jpg" className="th_img"></img>
            </Col>
            <Col>
              <h1 className="tm_h">
                Dr. Shreeshan Jena (Principal Project Scientist)
              </h1>
              <p className="tm_p">
                Dr. Jenaworks on the development of an integrated
                musculoskeletal simulation platform for studying the effect of
                assistive devices on human physiology. Dr. Jena obtained his
                PhD, in human motion analysis and biomechanics (National
                Institute of Technology Rourkela, India), under the supervision
                of Prof. A. Thirugnanam and Prof. S.K. Panda, investigating a
                lower limb orthotic device using experimental (MoCap) and
                simulation(FEA) techniques. He holds a B.Tech degree in
                Mechanical Engineering from S’O’A University.
              </p>
              <a
                className="tm_lo"
                href="https://www.linkedin.com/in/shreeshan-jena-07096136/"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="tm_lo"
                href="https://scholar.google.co.in/citations?user=hjpvOwEAAAAJ&hl=en&oi=ao"
              >
                <SiGooglescholar />
              </a>
              <a
                className="tm_lo"
                href="https://www.researchgate.net/profile/Shreeshan-Jena"
              >
                <SiResearchgate />
              </a>
            </Col>
          </Row>
        </div>
        <div className="tmm">
          <Row>
            <Col>
              <h1 className="tm_h">
                Dr. Shreeshan Jena (Principal Project Scientist)
              </h1>
              <p className="tm_p">
                Dr. Jenaworks on the development of an integrated
                musculoskeletal simulation platform for studying the effect of
                assistive devices on human physiology. Dr. Jena obtained his
                PhD, in human motion analysis and biomechanics (National
                Institute of Technology Rourkela, India), under the supervision
                of Prof. A. Thirugnanam and Prof. S.K. Panda, investigating a
                lower limb orthotic device using experimental (MoCap) and
                simulation(FEA) techniques. He holds a B.Tech degree in
                Mechanical Engineering from S’O’A University.
              </p>
              <a
                className="tm_lo"
                href="https://www.linkedin.com/in/shreeshan-jena-07096136/"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="tm_lo"
                href="https://scholar.google.co.in/citations?user=hjpvOwEAAAAJ&hl=en&oi=ao"
              >
                <SiGooglescholar />
              </a>
              <a
                className="tm_lo"
                href="https://www.researchgate.net/profile/Shreeshan-Jena"
              >
                <SiResearchgate />
              </a>
            </Col>
            <Col>
              <img src="prof1.jpg" className="thl_img"></img>
            </Col>
          </Row>
        </div>
      </div>
      <div className="t_mem">
        <h1 className="thh"> Team Members</h1>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="prof1.jpg" />
              <Card.Body>
                <Card.Title>
                  Dr. Shreeshan Jena (Principal Project Scientist)
                </Card.Title>
                <Card.Text>
                  Dr. Jenaworks on the development of an integrated
                  musculoskeletal simulation platform for studying the effect of
                  assistive devices on human physiology. Dr. Jena obtained his
                  PhD, in human motion analysis and biomechanics (National
                  Institute of Technology Rourkela, India), under the
                  supervision of Prof. A. Thirugnanam and Prof. S.K. Panda,
                  investigating a lower limb orthotic device using experimental
                  (MoCap) and simulation(FEA) techniques. He holds a B.Tech
                  degree in Mechanical Engineering from S’O’A University.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <a
                  className="tm_lo"
                  href="https://www.linkedin.com/in/shreeshan-jena-07096136/"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className="tm_lo"
                  href="https://scholar.google.co.in/citations?user=hjpvOwEAAAAJ&hl=en&oi=ao"
                >
                  <SiGooglescholar />
                </a>
                <a
                  className="tm_lo"
                  href="https://www.researchgate.net/profile/Shreeshan-Jena"
                >
                  <SiResearchgate />
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="prof2.jpg" />
              <Card.Body>
                <Card.Title>Rajnish Kumar (Doctoral Scholar)</Card.Title>
                <Card.Text>
                  Rajnish is a Ph.D. research scholar at the Department of
                  Applied Mechanics, IIT Delhi since July 2020. Prior to that,
                  he has completed his masters from the same department. His
                  research interests includebiomechanics, musculoskeletal
                  modeling, and simulation of human motion and its application
                  in soft robotic assistive devices. He is involved thoroughly
                  with the JATC project titled ''Wearable soft robotics for
                  upper limb muscle power augmentation with BMI interface''.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <a
                  className="tm_lo"
                  href="https://www.linkedin.com/in/shreeshan-jena-07096136/"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className="tm_lo"
                  href="https://scholar.google.co.in/citations?user=hjpvOwEAAAAJ&hl=en&oi=ao"
                >
                  <SiGooglescholar />
                </a>
                <a
                  className="tm_lo"
                  href="https://www.researchgate.net/profile/Shreeshan-Jena"
                >
                  <SiResearchgate />
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="prof3.jpg" />
              <Card.Body>
                <Card.Title>Shaurya Surana</Card.Title>
                <Card.Text>
                  Shaurya is a Junior Research Fellow (JRF) at the Biomechanics
                  and Soft Robotics lab at IIT Delhi.He is actively working on
                  Wearable Soft Robotics-related projects, under the supervision
                  of Prof. Sitikantha Roy in the areas of modeling and
                  fabrication. He holds a B.Tech in Mechanical Engineering from
                  MIT WPU, Pune.He believes that advances in Soft Robotics
                  technology are the key to unlock a new age of automation, and
                  bring the highest level of adaptability while lowering system
                  complexity and associated costs.Shaurya says that working with
                  nature is a sustainable future, and Soft Robotics is a big
                  step towards it.His interests include art and football.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <a
                  className="tm_lo"
                  href="https://www.linkedin.com/in/shreeshan-jena-07096136/"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className="tm_lo"
                  href="https://scholar.google.co.in/citations?user=hjpvOwEAAAAJ&hl=en&oi=ao"
                >
                  <SiGooglescholar />
                </a>
                <a
                  className="tm_lo"
                  href="https://www.researchgate.net/profile/Shreeshan-Jena"
                >
                  <SiResearchgate />
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="prof4.jpg" />
              <Card.Body>
                <Card.Title>Dr. Amit Yadav (Research Associate)</Card.Title>
                <Card.Text>
                  Dr. Yadav specializes in designing and developing soft
                  actuators and sensors for wearable robotics. He holds a B.Tech
                  in Civil Engineering from NIT Allahabad, an M.Tech in
                  Structural Engineering from IIT Dhanbad, and a PhD from IIT
                  Dhanbad in the area of nonlinear vibration and stability
                  analysis of structural components. His research focuses on
                  advancing wearable robotics through innovative soft actuation
                  and sensing technologies.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <a
                  className="tm_lo"
                  href="https://www.linkedin.com/in/shreeshan-jena-07096136/"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className="tm_lo"
                  href="https://scholar.google.co.in/citations?user=hjpvOwEAAAAJ&hl=en&oi=ao"
                >
                  <SiGooglescholar />
                </a>
                <a
                  className="tm_lo"
                  href="https://www.researchgate.net/profile/Shreeshan-Jena"
                >
                  <SiResearchgate />
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="prof5.jpg" />
              <Card.Body>
                <Card.Title>Dr. Varnita Verma </Card.Title>
                <Card.Text>
                  Dr. Varnita Verma is an Institute Post-Doctoral Fellow in the
                  School of Interdisciplinary Research Engineering at IIT Delhi.
                  Prior to joining IIT Delhi, she was Assistant Professor in
                  DEEE at G D Goenka University, Gurugram. She has completed her
                  Ph.D. and M.Tech. in Robotics Engineering from the University
                  of Petroleum and Energy Studies, Dehradun. Her doctoral
                  research focuses on the Design and Analysis of Ex-vivo
                  minimally invasive robotic systems for robotic surgery.
                  Presently Dr. Varnita works in the field of Soft Robotics,
                  Medical Robots, and Nonlinear Control. She completed 3 funded
                  projects and Filled patents.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <a
                  className="tm_lo"
                  href="https://www.linkedin.com/in/shreeshan-jena-07096136/"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className="tm_lo"
                  href="https://scholar.google.co.in/citations?user=hjpvOwEAAAAJ&hl=en&oi=ao"
                >
                  <SiGooglescholar />
                </a>
                <a
                  className="tm_lo"
                  href="https://www.researchgate.net/profile/Shreeshan-Jena"
                >
                  <SiResearchgate />
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="prof6.jpg" />
              <Card.Body>
                <Card.Title>Dr. Shivangi Giri (Research Associate)</Card.Title>
                <Card.Text>
                  Dr. Giriworks on the development ofvirtual human
                  musculoskeletal models and simulating them with assistive
                  devices to analyze biomechanical and physiological
                  performances.She obtained a B. Tech. in Instrumentation and
                  Control Engineering with honors from JSS Academy of Technical
                  Education, Noida and an M. Tech. in Biomedical Engineering
                  from Motilal Nehru National Institute of Technology (MNNIT)
                  Allahabad. Dr. Girireceived her PhDfrom MNNIT Allahabad in
                  human musculoskeletal modelling and gait biomechanical
                  analysis.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <a
                  className="tm_lo"
                  href="https://www.linkedin.com/in/shreeshan-jena-07096136/"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className="tm_lo"
                  href="https://scholar.google.co.in/citations?user=hjpvOwEAAAAJ&hl=en&oi=ao"
                >
                  <SiGooglescholar />
                </a>
                <a
                  className="tm_lo"
                  href="https://www.researchgate.net/profile/Shreeshan-Jena"
                >
                  <SiResearchgate />
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="prof7.jpg" />
              <Card.Body>
                <Card.Title>Sahil Goyal </Card.Title>
                <Card.Text>
                  Sahil Goyal is a Junior Research Fellow (JRF) at Soft Robotics
                  Lab, IIT Delhi. He is working on the control aspect of
                  wearable soft robotics related projects, under the guidance of
                  Dr.Shubhendu Bhasin. His research interests include controls
                  and applied mathematics. He has completed his B.Tech in
                  Electronics and Communications Engineering from IIIT-Delhi.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <a
                  className="tm_lo"
                  href="https://www.linkedin.com/in/shreeshan-jena-07096136/"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className="tm_lo"
                  href="https://scholar.google.co.in/citations?user=hjpvOwEAAAAJ&hl=en&oi=ao"
                >
                  <SiGooglescholar />
                </a>
                <a
                  className="tm_lo"
                  href="https://www.researchgate.net/profile/Shreeshan-Jena"
                >
                  <SiResearchgate />
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="prof8.jpg" />
              <Card.Body>
                <Card.Title>Anant Jain (Research Scholar, PhD) </Card.Title>
                <Card.Text>
                  Anant Jain is pursuing the PhDdegree at Department of
                  Electrical Engineering, MSP Lab, IIT Delhi. He holds a B.E. in
                  Electronics and Instrumentation Engineering from Medicaps
                  Group of Institutions, Indore and M.Tech in Biomedical
                  Engineering from NIT Kurukshetra. His research focuses on
                  decoding kinematics trajectory from biophysiological signals
                  (EEG/EMG) for efficient control of wearable exosuit. His
                  research interests include biomedical signal processing,
                  computational neuroscience, brain-computer interface,
                  human-machine interface, and artificial intelligence.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <a
                  className="tm_lo"
                  href="https://www.linkedin.com/in/shreeshan-jena-07096136/"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className="tm_lo"
                  href="https://scholar.google.co.in/citations?user=hjpvOwEAAAAJ&hl=en&oi=ao"
                >
                  <SiGooglescholar />
                </a>
                <a
                  className="tm_lo"
                  href="https://www.researchgate.net/profile/Shreeshan-Jena"
                >
                  <SiResearchgate />
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="prof9.jpg" />
              <Card.Body>
                <Card.Title>Nitesh Kumar</Card.Title>
                <Card.Text>
                  Nitesh Kumar is a research associate at Joint Advanced
                  Technology Centre working under the project entitled Wearable
                  soft robotics for Upper Limb Muscle Power Augmentation with
                  BMI interface. Before joining IIT Delhi, he was working as a
                  manager in MEP department of the New Parliament Building
                  project. He has done his Btech in mechanical engineering from
                  IIT Madras with a minor in control engineering. His research
                  interests lies in the domain of robotics and control systems.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <a
                  className="tm_lo"
                  href="https://www.linkedin.com/in/shreeshan-jena-07096136/"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className="tm_lo"
                  href="https://scholar.google.co.in/citations?user=hjpvOwEAAAAJ&hl=en&oi=ao"
                >
                  <SiGooglescholar />
                </a>
                <a
                  className="tm_lo"
                  href="https://www.researchgate.net/profile/Shreeshan-Jena"
                >
                  <SiResearchgate />
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h1 className="tm_h">
          We are proud of our team members and their contributions to the field
          of wearable robotics. Together, we are committed to pushing
          boundaries, driving innovation, and transforming the future of
          assistive technologies.
        </h1>
      </div>
      <Footer/>
    </div>
  );
};

export default Team;
