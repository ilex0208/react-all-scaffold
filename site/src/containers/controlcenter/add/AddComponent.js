import React, {Component, PropTypes} from 'react';
import { Form, Input, Select, Col, Button, Upload, Icon } from 'AptAntd';
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;

/**
 * 添加一个组件
 */
class AddComponent extends Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Form horizontal>

        <FormItem
          id="comsPic-form"
          label="组件封面图"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <Upload
            name="comsPic" action="/upload.do" listType="picture"
            {...getFieldProps('upload', {
              valuePropName: 'fileList',
              normalize: this.normFile
            })}
          >
            <Button type="ghost">
              <Icon type="upload" /> 点击上传
            </Button>
          </Upload>
        </FormItem>

        <FormItem
          id="control-input"
          label="组件名称"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
        >
          <Input id="comsName" placeholder="Please enter a component name..." />
        </FormItem>

        <FormItem
          id="comsType-form"
          label="组件类别"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
        >
          <Select id="comsType-select" size="large" defaultValue="基础类" style={{ width: 200 }} onChange={() => console.log('你选择了一下！')}>
            <Option value="basic">基础类</Option>
            <Option value="monitor">监控类</Option>
            <Option value="detection" disabled>检测类</Option>
            <Option value="check">校验类</Option>
          </Select>
        </FormItem>
        <FormItem
          id="comsCost-form"
          label="组件价格"
          labelCol={{ span: 6 }}
          validateStatus="success"
          wrapperCol={{ span: 16 }}
        >
          <Input id="comsCost-input" addonAfter="￥/天" defaultValue="125.6" />
        </FormItem>

        <FormItem
          id="comsAddr-form"
          label="组件地址"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <Input id="comsAddr-input" addonBefore="Http://" defaultValue="ilexMs.com" />
        </FormItem>

        <FormItem
          id="comsProvider-form"
          label="组件提供者"
          labelCol={{ span: 6 }}
          validateStatus="success"
          wrapperCol={{ span: 16 }}
        >
          <Input id="comsProvider-input" addonBefore="Http://" addonAfter=".com" defaultValue="ilex" />
        </FormItem>

        <FormItem
          id="comsContact-form"
          label="联系方式"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <InputGroup>
            <Col span="4">
              <Input id="tel1" defaultValue="086" />
            </Col>
            <Col span="2">
              <p className="ant-form-split">--</p>
            </Col>
            <Col span="6">
              <Input id="tel1" />
            </Col>
            <Col span="6">
              <Input id="tel2" />
            </Col>
            <Col span="6">
              <Input id="tel3" />
            </Col>
          </InputGroup>
        </FormItem>

        <FormItem
          id="button-item"
          wrapperCol={{ span: 16, offset: 8 }}
          style={{ marginTop: 24 }}
        >
          <Button type="primary" htmlType="submit">确定</Button>
          <Button type="primary" style={{ marginLeft: 8 }} htmlType="submit">取消</Button>
        </FormItem>
      </Form>
    );
  }
}

AddComponent.propTypes = {
  form:PropTypes.any,
  getFieldProps:PropTypes.any// 用于和表单进行双向绑定
};

export default Form.create()(AddComponent);
