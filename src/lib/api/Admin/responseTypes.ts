export interface RefreshToken {
  access_token: string;
}

export interface CompressedName {
  compressed_file_name: string;
}

export interface Me {
  completion_assignment: number;
  id: number;
  name: string;
  remaining_assignment: number;
  student_number: string;
  type: string;
}

export interface FileInfoItem {
  file_id: number;
  file_name: string;
}

export interface FileInfo {
  file_information: FileInfoItem[];
}

export interface Login {
  access_token: string;
  refresh_token: string;
}

export interface User {
  id: number;
  number: string;
  name: string;
}

export type ChatUsers = User[];
