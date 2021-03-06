(function() {
  var Constants = {};

  Constants.Version = 0.97;
  Constants.ConfigVersion = 0.97;

  Constants.Action = {
    Config: {
      CancelConfig: 'config-cancelConfig',
      StoreConfig: 'config-storeKeyConfig',
    },

    Controller: {
      KeyDown: 'controller-KeyDown',
      KeyUp: 'controller-KeyUp',
    },

    Edit: {
      BackNext: 'edit-backNext',
      BeginSetCell: 'edit-beginSetCell',
      BuildDownField: 'edit-buildDownField',
      BuildUpField: 'edit-buildUpField',
      Cancel: 'edit-cancel',
      ChangeModeToSimu: 'edit-changeModeToSimu',
      CreateUrlParameters: 'edit-createUrlParameters',
      Clear: 'edit-clear',
      DeleteNext: 'edit-deleteNext',
      EndSetCell: 'edit-endSetCell',
      ForwardNext: 'edit-forwardNext',
      Initialize: 'edit-initialize',
      InsertNext: 'edit-insertNext',
      SelectType: 'edit-selectType',
      SetCell: 'edit-setCell',
      SetHold: 'edit-setHold',
      SetNext: 'edit-setNext',
    },

    Mouse: {
      Down: 'mouse-KeyDown',
      Up: 'mouse-KeyUp',
    },

    Simu: {
      Back: 'simu-back',
      BackToEditMode: 'simu-backToEditMode',
      BackToHead: 'simu-backToHead',
      ChangeModeToEdit: 'simu-changeModeToEdit',
      ChangeModeToSimu: 'simu-changeModeToSimu',
      ChangeModeToReplay: 'simu-changeModeToReplay',
      Clear: 'simu-clear',
      CreateUrlParameters: 'simu-createUrlParameters',
      Forward: 'simu-forward',
      HardDrop: 'simu-hardDrop',
      Hold: 'simu-hold',
      Initialize: 'simu-initialize',
      Move: 'simu-move',
      ToggleNextVisible: 'simu-toggleNextVisible',
      TurnRight: 'simu-turnRight',
      TurnLeft: 'simu-turnLeft',
      Retry: 'simu-retry'
    },

    Replay: {
      Back: 'replay-back',
      BackToHead: 'replay-backToHead',
      CancelConfig: 'replay-cancelConfig',
      ChangeModeToSimu: 'replay-changeModeToSimu',
      CreateUrlParameters: 'replay-createUrlParameters',
      Forward: 'replay-forward',
      Initialize: 'replay-initialize',
    },
  };

  Constants.Event = {
    Cancel: 'cancel',
    Change: 'change',
    ChangeMode: 'changeMode',
    SetUrl: 'setUrl',
    Key: 'Key'
  };

  Constants.Mode = {
    Simu: '0',
    Replay: '1',
    Edit: '2'
  };

  Constants.KeyNames = [
    'shift',
    'ctrl',
    'caps',
    'esc',
    'space',
    'left',
    'up',
    'right',
    'down',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'cmd',
    'num_0',
    'num_1',
    'num_2',
    'num_3',
    'num_4',
    'num_5',
    'num_6',
    'num_7',
    'num_8',
    'num_9',
    'num_multiply',
    'num_add',
    'num_enter',
    'num_subtract',
    'num_decimal',
    'num_divide',
    ';',
    '=',
    ',',
    '-',
    '.',
    '/',
    '`',
    '[',
    '\\',
    ']',
    '\'',
    '`',
    '-',
    "?",
    ">",
    "<",
    "\"",
    ":",
    "{",
    "}",
    "|",
    "~",
    "+",
    "_",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")"
  ];

  // keypress.jsは英語配列準拠のようなので「@」などが入っている
  Constants.ShiftedKeys = [
    "?",  //"/"
    ">",  //"."
    "<",  //","
    "\"", //"\'"
    ":",  //";"
    "{",  //"["
    "}",  //"]"
    "|",  //"\\"
    "~",  //"`"
    "+",  //"="
    "_",  //"-"
    "!",  //"1"
    "@",  //"2"
    "#",  //"3"
    "$",  //"4"
    "%",  //"5"
    "^",  //"6"
    "&",  //"7"
    "*",  //"8"
    "(",  //"9"
    ")"   //"0"
  ];

  Constants.MouseButton = {
    Left: 1,
  };

  Constants.SpinType = {
    None: '0',
    TSpin: '1',
    TSpinMini: '2'
  };

  Constants.Trick = {
    None: '0',
    Single: '1',
    Double: '2',
    Triple: '3',
    Tetris: '4',
    TSSM: '5',
    TSS: '6',
    TSD: '7',
    TST: '8',
    TSM: '9',
    TS: '10',
    OverTetris: '11',
  };

  Constants.StepType = {
    None: '0',
    HardDrop: '1',
    SoftDrop: '2',
    Hold: '3',
    Ojama: '4'
    // 5～15：reserved
  };

  C.Constants = Constants;
})();

