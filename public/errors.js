var __ERRORS_STRINGS__ = {
    zh:{
        '-10': '数据读取错误',
        '-9': '数据写入错误',
        '-8': '数据发送错误',
        '-7': 'AES认证失败',
        '-6': '结构体异常',
        '-5': '空间满',
        '-4': '不支持的命令类型',
        '-3': '设备不在线',
        '-2': '其他地方登录。强制退出。',
        '-1': '认证失败,认证码被修改，需要进入所在局域网刷新重新获取认证信息',

        '-4043': '不支持的加密类型',
        '-4042': 'SSL读数据内容失败',
        '-4041': 'SSL读数据头失败',
        '-4040': 'SSL写数据失败',
        '-4039': 'SSL证书无效',
        '-4038': 'SSL与服务器握手失败',
        '-4037': 'SSL连接服务器失败',
        '-4036': '无效license',
        '-4035': 'SDK未注册，请先调用SDKAuth',
        '-4034': 'SDK正在注册，请等待完成',
        '-4033': '调用系统函数错误',
        '-4032': '脚本解析失败',
        '-4031': '数据非法',
        '-4030': '数据buffer空间不足',
        '-4029': '不存在对应的通信地址',
        '-4028': '电控板与模块之间通信超时',
        '-4027': '不支持IFTTT的设备',
        '-4026': '数据有误',
        '-4025': 'SDK版本不支持远程操作',
        '-4024': '操作过于频繁',
        '-4023': '无效license',
        '-4022': '不支持的param',
        '-4021': '用户类型错误',
        '-4020': '脚本文件有误',
        '-4019': 'pat文件有误',
        '-4018': '分配内存失败',
        '-4017': '输入的设备信息有误',
        '-4016': 'JSON字符串的数据类型有误',
        '-4015': '传入的JSON字符串有误',
        '-4014': '网络库初始化失败',
        '-4013': '域名解析失败',
        '-4012': '设备控制ID错误，设备已经复位且控制终端未在局域网与设备配对配对',
        '-4011': '接收数据解密校验失败',
        '-4010': '接收数据解密长度失败',
        '-4009': '网络消息类型错误',
        '-4008': '接收数据包校验失败',
        '-4007': '接收数据包长度有误',
        '-4006': 'socket操作失败',
        '-4005': 'socket发包失败',
        '-4004': '设置socket属性失败',
        '-4003': '创建socket失败',
        '-4002': '取消easyconfig',
        '-4001': '设备不在局域网',
        '-4000': '超时',

        '-1028': '手机号码错误',
        '-1029': '头像保存错误',
        '-1030': '验证码发送过于频繁',
        '-1031': '验证码超时或不存在',
        '-1032': '手机号码已经注册',
        '-1033': '手机号码或密码不正确',
        '-1034': '未验证手机验证码',
        '-1035': '帐号不存在',
        '-1036': '尝试次数过多 请过一段时间后重试',
        '-1037': '登录信息不正确',
        '-1038': '邮箱已经注册',
        '-1039': '验证码已失效',
        '-1040': '发送短信次数过多',
        '-1041': '数据超长',
        '-1042': '权限格式错误',
        '-1043': '权限已存在',
        '-1044': '角色格式错误',
        '-1045': '角色已存在',
        '-1046': '企业已存在',
        '-1049': '该账号被禁用',
        '-1050': '密码已设置，请直接修改密码',
        '-1051': '不支持的第三方oauth平台',
        '-1052': '第三方oauth未认证成功',
        '-1099': '操作过于频繁',

        '-12400':'不支持的协议版本',
        '-12401':'服务器忙',
        '-12402':'数据错误',
        '-12403':'不是有效的申请',
        '-12404':'请求时间过期',
        '-12405':'没有权限',

        '-3001': '未知异常',
        '-3002': '参数错误',
        '-3003': '未登录',
        '-3004': '网络异常',
        '-3005': '网络请求过快',
        '-3006': '服务器未返回数据',
        '-3101': '未知异常',
        '-3102': '未登录异常',
        '-3103': '设备不存在异常',
        '-3104': '获取TOKEN异常',
        '-3105': '查询资源异常',
        '-3106': '无法找到请求的资源',
        '-3107': 'Body JSON格式错误',
        '-3108': '数据缺少必要字段',
        '-3109': 'TOKEN/URL过期',
        '-3110': '请求方法错误',
        '-3111': '用户主动停止',
        '-3112': '解压文件失败',
        '-3113': '文件不存在',
        '-3115': '控制系统传入AccessKey为空',
        '-3201': '位置异常错误',
        '-3202': '输入参数错误',
        '-3203': '用户未登录',

        '-14001': '服务器忙',
        '-14002': '数据错误',
        '-14003': '没有该红码',
        '-14004': '红码已存在',
        '-14005': '下载人数过多 请稍后',
        '-14006': '内部没有该红码ID',
        '-14007': '红码计算数字失败',
        '-14008': '结果太多 请选择下级区域',
        '-14009': '输入不匹配',
        '-14010': '添加项已存在',
        '-14011': '更新项不存在',
        '-14012': '红码未匹配',
        '-14013': '区域不允许',
        '-14014': '红码为空，请上传',
        '-14015': '地区ID不匹配',
        '-14016': '地区命名重复',
        '-14017': 'Pid不存在',
        '-14018': '查询类型不存在',
        '-14019': 'Group不存在',
        '-14020': 'BizCenter转发失败',
        '-14021': '无权限',
        '-14022': '红码太长',
        '-14023': '图片太大',
        '-14024': '状态不允许',
        '-14025': '品牌不存在',
        '-14026': '家电类型不存在',
        '-14027': '品牌家电未绑定',
        '-14028': '型号未绑定到指定品牌家电',
        '-14029': '规则添加用户组过多',
        '-14030': 'Kit获取产品为空',
        '-14031': '产品未找到',
        '-14032': '没有新产品',
        '-14033': '产品已存在',
        '-14034': 'Kit产品已经更新 需重新审核',
        '-14035': '从Kit获得产品格式不符',
        '-14036': '用户组不存在',
        '-14037': '产品规则太多',
        '-14038': '请求太频繁，请稍后重试',
        '-14039': '请求不存在',
        '-14040': '用户组添加用户数量过多',
        '-14041': '未查到用户',
        '-14042': '路径错误',
        '-14043': '命名重复',
        '-14044': '权限不允许',
        '-14045': '未找到',
        '-14046': '产品分类不存在',
        '-14047': 'Kit交互失败',
        '-14048': '文件太长',
        '-14049': '供应商不存在',
        '-14050': '地区不存在',
        '-14051': '子类型列表不为空',
        '-14052': '图库错误',
        '-14053': '类型下图库非空',
        '-14054': '权限未通过',
        '-14055': '下载次数达到限额',
        '-14056': 'ticket 验证不通过',
        '-14057': '操作用户空间出错',

        '-2016' :  '房间内有设备，不能删除',
        '-2017' :  '房间内有模块，不能删除',
        '-2018' :  '该产品不存在',
        '-2019' :  '数据冲突',
        '-2020' :  '非内测用户',
        '-2021' :  '命名冲突',
        '-2022' :  '非注册用户原始手机',
        '-2023' :  '数据超长',
        '-2024' :  '不能退出自己创建的家庭',
        '-2025' :  '键值不允许',
        '-2026' :  '家庭设备数量过多',
        '-2027' :  '设备未绑定家庭成员',
        '-2028' :  '操作不被允许',
        '-2029' :  '参数不匹配',
        '-2030' :  '设备不属于家庭',
        '-2031' :  '设备不存在',
        '-2032' :  '单次添加模块数量过多',
        '-2033' :  '房间内有子设备，不能删除',
        '-2034' :  '用户不存在',
        '-2035' :  'VT已存在',
        '-2036' :  'VT不存在',
        '-2037' :  'VT列表为空',
        '-2038' :  'VT操作过于频繁',
        '-2039' :  '重复操作',
        '-2040'  : '设备信息不完整，请重新添加'
    },
    en:{
        '-10': 'READ_ERROR',
        '-9': 'WRITE_ERROR',
        '-8': 'SEND_ERROR',
        '-7': 'AES AUTH FAIL, FOR LOCAL DEVICE, should call add new again',
        '-6': 'Structure is abnormal',
        '-5': 'The device storage is full',
        '-4': 'Not supported command',
        '-3': 'The device is offline',
        '-2': 'Logged in from other devices. You have been logged out',
        '-1': 'Authentication failed. The authentication code was changed. You need to pair the device again',

        '-4043': 'Encryption type is not supported',
        '-4042': 'SSL reading data content failed',
        '-4041': 'Please check network conditions',
        '-4040': 'SSL writing data error',
        '-4039': 'SSL certificate invalid',
        '-4038': 'SSL and server handshake failed',
        '-4037': 'Connecting SSL to server failed',
        '-4036': 'Invalid license',
        '-4035': 'SDK is not authenticated',
        '-4034': 'SDK is registering',
        '-4033': 'System invoking error',
        '-4032': 'Script resolution error',
        '-4031': 'Script resolution error',
        '-4030': 'Data buffer too small',
        '-4029': 'Server does not exist',
        '-4028': 'Main board does not respond in time',
        '-4027': 'Not in use',
        '-4026': 'Data sent or received error',
        '-4025': 'SDK does not support remote control',
        '-4024': 'Too frequent operations',
        '-4023': 'License is blocked',
        '-4022': 'Not supported command',
        '-4021': 'Not in use',
        '-4020': 'Script resolution error',
        '-4019': 'Not in use',
        '-4018': 'System invoking failed',
        '-4017': 'JSON error in transferred parameter of device information',
        '-4016': 'Data type error in transferred parameter of JSON',
        '-4015': 'Invalid transferred parameter',
        '-4014': 'SDK initialization failed',
        '-4013': 'Domain name resolution error',
        '-4012': 'Device control ID error',
        '-4011': 'Received encrypted data packet check error',
        '-4010': 'Received encrypted data packet length error',
        '-4009': 'Received data packet information type error',
        '-4008': 'Received data packet check error',
        '-4007': 'Received data packet length error',
        '-4006': 'System invoking failed',
        '-4005': 'System invoking failed',
        '-4004': 'System invoking failed',
        '-4003': 'System invoking failed',
        '-4002': 'User cancelled EasyConfig',
        '-4001': 'Device is not in WLAN',
        '-4000': 'Network timeout',

        '-1028': 'Mobile phone number error',
        '-1029': 'Avatar saving error',
        '-1030': 'Sending validation code too frequently',
        '-1031': 'Validation code timeout or does not exist',
        '-1032': 'The mobile phone number has been registered',
        '-1033': 'Mobile phone number or password incorrect',
        '-1034': 'Under validation',
        '-1035': 'Account does not exist',
        '-1036': 'Too frequent requests. Please wait for some time before next try.',
        '-1037': 'Sign-in information error',
        '-1038': 'Email address has been registered',
        '-1039': 'Invalid activation code',
        '-1040': 'Too frequent message sending',
        '-1041': 'Data is long',
        '-1042': 'Permission format error',
        '-1043': 'Permission is existing',
        '-1044': 'wrong format',
        '-1045': 'Role exists',
        '-1046': 'Company exists',
        '-1049': 'This account has been disabled',
        '-1050': 'Password has been set. Please change password directly.',
        '-1051': 'Unsupported 3rd-party oauth platform',
        '-1052': '3rd-party oauth authentication failed',
        '-1099': 'Too frequent operations',

        '-12400':'Unsupported protocol versions',
        '-12401':'server is busy',
        '-12402':'data error',
        '-12403':'Not a valid application',
        '-12404':'Request time expires',
        '-12405':'No authority',

        '-3001': 'Unknown error',
        '-3002': 'Parameter error',
        '-3003': 'Not logged in',
        '-3004': 'Network Anomaly',
        '-3005': 'Network request is too fast',
        '-3006': 'The server did not return data',
        '-3101': 'Unknown error',
        '-3102': 'Unlogged exception',
        '-3103': 'The device is not found',
        '-3104': 'Obtaining token error',
        '-3105': 'Querying resource is abnormal',
        '-3106': 'Cannot find requested resources',
        '-3107': 'Body format error',
        '-3108': 'Necessary field missing',
        '-3109': 'The TOKEN/URL is expired',
        '-3110': 'Request method error',
        '-3111': 'User requested stop',
        '-3112': 'Extracting files failed',
        '-3113': 'File does not exist',
        '-3115': 'The AccessKey is blank',
        '-3201': 'Abnormal position error',
        '-3202': 'Input parameter error',
        '-3203': 'User not logged in',

        '-14001': 'Server is busy',
        '-14002': 'Data error',
        '-14003': 'Cannot find the IR code',
        '-14004': 'The IR code already exists',
        '-14005': 'Server is busy. Please wait',
        '-14006': 'Data error',
        '-14007': 'Calculating figure for IR code error',
        '-14008': 'Too many results. Please select sub-category',
        '-14009': 'Input does not match',
        '-14010': 'Item to be added exists',
        '-14011': 'Item to be updated does not exist',
        '-14012': 'IR code does not match',
        '-14013': 'Region is not permitted',
        '-14014': 'IR code is void. Please upload',
        '-14015': 'Region ID does not match',
        '-14016': 'Region name duplicated',
        '-14017': 'PID does not exist',
        '-14018': 'Querying type does not exist',
        '-14019': 'Group does not exist',
        '-14020': 'BizCenter transfer failed',
        '-14021': 'No permission',
        '-14022': 'IR code is too long',
        '-14023': 'Picture size too big',
        '-14024': 'State is not allowed',
        '-14025': 'Brand does not exist',
        '-14026': 'Appliance type does not exist',
        '-14027': 'Appliance of this brand is not associated',
        '-14028': 'Model is not associated to the appliance of specified brand',
        '-14029': 'Too many users added in this rule',
        '-14030': 'Void in retrieving products from DNAKit',
        '-14031': 'Cannot find product',
        '-14032': 'No new product',
        '-14033': 'Product already exist',
        '-14034': 'Product updated on DNAKit. Please get it approved again.',
        '-14035': 'Incorrect product format retrieved from DNAKit',
        '-14036': 'User group does not exist',
        '-14037': 'Too many product rules',
        '-14038': 'Too frequent requests. Please try again later.',
        '-14039': 'Request does not exist',
        '-14040': 'Too many users added in this user group',
        '-14041': 'Cannot find user',
        '-14042': 'Path error',
        '-14043': 'Name duplicated',
        '-14044': 'Permission is not allowed',
        '-14045': 'Cannot find',
        '-14046': 'Product category does not exist',
        '-14047': 'Permission is not approved',
        '-14048': 'Downloads reach limit',
        '-14049': 'Ticket validation failed',
        '-14050': 'User-space operation error',
        '-14051': 'Information incomplete',
        '-14052': 'Uploading data error',
        '-14053': 'Picture gallery under this type is empty',
        '-14054': 'Permission was not approved',
        '-14055': 'Dowload times reach the limit',
        '-14056': 'Ticket authentication failed',
        '-14057': 'User-space operation error',

        '-2016' :  'Cannot delete the room because it contains devices',
        '-2017' :  'Cannot delete the room because it contains modules',
        '-2018' :  'Cannot find this product',
        '-2019' :  'Data conflicted',
        '-2020' :  'Not beta user',
        '-2021' :  'Name conflicted',
        '-2022' :  'Not original mobile phone number of registered user',
        '-2023' :  'Data too long',
        '-2024' :  'Cannot quit from the home you created',
        '-2025' :  'Key value not allowed',
        '-2026' :  'Too many devices in the home',
        '-2027' :  'Home members are not associated to the device',
        '-2028' :  'Operation is not permitted',
        '-2029' :  'Parameter does not match',
        '-2030' :  'The device does not belong to this home',
        '-2031' :  'Device not exist',
        '-2032' :  'Too many modules added',
        '-2033' :  'Cannot delete the room because it contains sub-devices',
        '-2034' :  'User does not exist',
        '-2035' :  'ErrVtExist',
        '-2036' :  'ErrVtNotExist',
        '-2037' :  'ErrVtListIsNil',
        '-2038' :  'ErrChangeVtTooMany',
        '-2039' :  'DuplicateEntry',
        '-2040'  :   'Data error',
    }
};
