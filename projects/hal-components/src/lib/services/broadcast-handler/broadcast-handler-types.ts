export type ChannelAction = 'open'
  | 'need data'
  | 'send next'
  | 'overwrite data'
  | 'reset';

export interface ChannelPacket {
  senderId?: string;
  messageId?: number; // auto added (used for ack)
  action?: ChannelAction | null;
  message?: any | null;
  targetId?: string | null; // is of reciver if needed. Used for acknowledgingPreviousMessage by setting targetId to masters id
  needAck?: boolean; // if a ack shold be returned. Is set automaticly
  acknowledgingPreviousMessage?: boolean | null; // slave respons true on this to signal that they received
}
