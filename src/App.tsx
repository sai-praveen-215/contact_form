import { Button, Col, Form, Input, message, Row } from "antd";
import "./Tailwind.css";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/es/form/Form";
function App() {
  const handleFinish = (props: any) => {
    console.log(props, "sai");
    message.success(
      "Message Sent! Thanks for Completeing the form we'll be in touch soon"
    );
    form.resetFields();
  };
  const [form] = useForm();
  return (
    <div className="bg-green-200 h-screen w-screen align-middle justify-center flex ">
      <div className="w-[50%] h-[80%] bg-white mt-20 shadow-2xl p-6">
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <h1 className="text-4xl font-bold text-cyan-700">Contact Us</h1>
          <Row gutter={[16, 16]}>
            <Col xl={12} xxl={12} sm={12} md={12} xs={24}>
              <Form.Item name="first_name" label="First Name">
                <Input required placeholder="Plese Enter First Name" />
              </Form.Item>
            </Col>
            <Col xl={12} xxl={12} sm={12} md={12} xs={24}>
              <Form.Item required name="last_name" label="Last Name">
                <Input placeholder="Plese Enter Last Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xl={24} xxl={24} sm={24} md={24} xs={24}>
              <Form.Item required name="email" label="Email">
                <Input placeholder="Plese Enter Email" />
              </Form.Item>
            </Col>
          </Row>
          <h3>Query Type</h3>
          <Row gutter={[16, 16]}>
            <Col xl={12} xxl={12} sm={12} md={12} xs={24}>
              <div className="h-8 rounded-md w-full border-t-2 border-b-2 border-l-2 border-r-2 flex align-middle justify-center gap-4">
                <Form.Item required name="General Enqury">
                  <input className="" type="radio" />
                </Form.Item>
                <h3 className="font-semibold p-0">General Enquery</h3>
              </div>
            </Col>
            <Col xl={12} xxl={12} sm={12} md={12} xs={24}>
              <div className="h-8 rounded-md w-full border-t-2 border-b-2 border-l-2 border-r-2 flex align-middle justify-center gap-4">
                <Form.Item required name="General Enqury">
                  <input className="" type="radio" />
                </Form.Item>
                <h3 className="font-semibold p-0">Support Request</h3>
              </div>
            </Col>
          </Row>
          <Row className="mt-4" gutter={[16, 16]}>
            <Col xl={24} xxl={24} sm={24} md={24} xs={24}>
              <Form.Item required name="message" label="Message">
                {/* <Input type="textrea" />< */}
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xl={24} xxl={24} sm={24} md={24} xs={24}>
              <Form.Item required name="contact_by_team ">
                <div className="flex align-middle justify-start gap-8 w-full">
                  <input type="checkbox" />
                  <h4 className="m-0">I prefer being contacted by team</h4>
                </div>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col xl={24} xxl={24} sm={24} md={24} xs={24}>
              <Button
                htmlType="submit"
                className="bg-gray-600 w-full text-white"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default App;
