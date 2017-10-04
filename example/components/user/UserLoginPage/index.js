import Link from 'next/link';
import { connect } from 'react-redux';
import Layout from '../../../layouts/layout';

import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class UserLoginPage extends React.Component {
  render() {
    return(
      <div className="LoginComponent">
        <h1>Rubify React</h1>
        <Form>
          <FormItem>
            <Input
              autoComplete="off"
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder="Username"
            />
          </FormItem>
          <FormItem>
            <Input
              autoComplete="off"
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="Password"
            />
          </FormItem>
          <FormItem>
            <Button
              onClick={() => this.props.handleLogin()}
              type="primary"
              htmlType="submit">
              Log in {this.props.logged ? 'on' : 'off'}
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Layout(connect()(UserLoginPage))
