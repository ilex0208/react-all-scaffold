// import './aptantd.less';
/**
 * 将系统中所有使用的antd组件,进行统一管理
 * 同时,针对该模块的导入,采用webpack的别名进行重定向,优化打包
 * 使用方式： import {Menu} from 'AptAntd';
 */
import * as _antd from 'antd';

// basic
export const Button = _antd.Button;
export const Icon = _antd.Icon;
export const Row = _antd.Row;
export const Col = _antd.Col;

// form controls
export const Cascader =_antd.Cascader;// 级联选择
export const Checkbox = _antd.Checkbox;// 多选框
export const DatePicker = _antd.DatePicker;// 输入或选择日期的控件
export const Form = _antd.Form;// 具有数据收集、校验和提交功能的表单,包含复选框、单选框、输入框、下拉选择框等元素
export const Input = _antd.Input;// 通过鼠标或键盘输入内容,是最基础的表单域的包装。
export const InputNumber = _antd.InputNumber;// 数字输入框
export const Radio = _antd.Radio;// 单选框
export const Rate = _antd.Rate;// 评分组件
export const Select = _antd.Select;// 下拉框选择器,注意：const Option = Select.Option;
export const Slider = _antd.Slider;// 滑动输入条
export const Switch = _antd.Switch;// 开关选择器
export const TimePicker = _antd.TimePicker;// 时间选择框
export const Transfer = _antd.Transfer;// 双栏穿梭选择框
export const TreeSelect = _antd.TreeSelect;// 树型选择控件
export const Upload = _antd.Upload;// 文件选择上传和拖拽上传控件

// Views
export const Alert = _antd.Alert;// 警告提示
export const Badge = _antd.Badge;// 图标右上角的圆形徽标数字。
export const Calendar = _antd.Calendar;// 日历,按照日历形式展示数据的容器。
export const Card = _antd.Card;// 通用卡片容器
export const Carousel = _antd.Carousel;// 旋转木马,一组轮播的区域。
export const Collapse = _antd.Collapse;// 折叠面板
export const Dropdown = _antd.Dropdown;// 下拉菜单
export const Message = _antd.Message;// 全局展示操作反馈信息
export const Modal = _antd.Modal;// 模态对话框
export const Notification = _antd.Notification;// 全局展示通知提醒信息
export const Popconfirm = _antd.Popconfirm;// 气泡确认框(在进行删除、编辑等操作时进行使用)
export const Popover = _antd.Popover;// 气泡卡片
export const Progress = _antd.Progress;// 展示操作的当前进度
export const Table = _antd.Table;// 表格
export const Tag = _antd.Tag;// 进行标记和分类的小标签
export const Timeline = _antd.Timeline;// 垂直展示的时间流信息
export const Tooltip = _antd.Tooltip;// 文字提示
export const Tree = _antd.Tree;// 树形控件,注意const TreeNode = Tree.TreeNode

// Navigation
export const Breadcrumb = _antd.Breadcrumb;// 面包屑,显示当前页面在系统层级结构中的位置,并能向上返回
export const Menu = _antd.Menu;// 导航菜单,注意：const SubMenu = Menu.SubMenu; const MenuItemGroup = Menu.ItemGroup;const MenuItem = Menu.Item;
export const Pagination = _antd.Pagination;// 分页
export const Steps = _antd.Steps;// 步骤条,注意：const Step = Steps.Step;
export const Tabs = _antd.Tabs;// 标签页,选项卡切换组件,其中const TabPane = Tabs.TabPane;

// Other
export const Affix = _antd.Affix;// 固钉：将页面元素钉在可视范围
export const BackTop = _antd.BackTop;// 回到顶部
export const LocaleProvider = _antd.LocaleProvider;// 国际化,为组件内建文案提供统一的国际化支持
export const Spin = _antd.Spin;//加载中

// 说明：
// 1 官方已废弃的组件,此处不建议进行使用
// 2 官方新增组件之后,及时在此处进行添加
// 3 所有使用到antd组件的地方,不允许使用 『 import {} from 'antd' 』 这种方式,只允许使用该文件进行导包,即『 import {} from 'AptAntd' 』

