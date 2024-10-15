import { Col, Form, Input, Row } from "antd";
import "./Tailwind.css";
function App() {
  return (
    <div className="bg-green-200 h-screen w-screen align-middle justify-center flex ">
      <div className="w-[50%] h-[80%] bg-white mt-20 shadow-2xl p-6">
        <Form layout="vertical">
          <h1 className="text-4xl font-bold text-cyan-700">Contact Us</h1>
          <Row gutter={[16, 16]}>
            <Col xl={12} xxl={12} sm={12} md={12} xs={24}>
              <Form.Item name="first_name" label="First Name">
                <Input placeholder="Plese Enter First Name" />
              </Form.Item>
            </Col>
            <Col xl={12} xxl={12} sm={12} md={12} xs={24}>
              <Form.Item name="last_name" label="Last Name">
                <Input placeholder="Plese Enter Last Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xl={24} xxl={24} sm={24} md={24} xs={24}>
              <Form.Item name="email" label="Email">
                <Input placeholder="Plese Enter Email" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xl={12} xxl={12} sm={12} md={12} xs={24}>
              <Form.Item name="General Enqury">
                <label></label>
                General Enqury <Input type="radio" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default App;
