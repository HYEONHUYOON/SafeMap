import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // 기본 다크 모드 설정
    primary: {
      main: "#1E3A8A", // 네이비 계열 (경찰, 보안 느낌 강조)
      contrastText: "#FFFFFF", // 대비되는 흰색 텍스트
    },
    secondary: {
      main: "#EF4444", // 경고, 위험 알림용 (강렬한 빨강)
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#0F172A", // 배경 (어두운 계열)
      paper: "#1E293B", // 카드, 모달 배경
    },
    text: {
      primary: "#E2E8F0", // 기본 텍스트 색상 (연한 회색, 가독성 높임)
      secondary: "#94A3B8", // 보조 텍스트 (밝은 회색)
    },
    error: { 
      main: "#B91C1C", // 위험 표시용
    },
    warning: {
      main: "#F59E0B", // 주의 표시
    },
    success: {
      main: "#10B981", // 긍정적인 정보 (녹색)
    },
    info: {
      main: "#3B82F6", // 정보 안내 (파란색)
    },
  },
  typography: {
    fontFamily: `"Noto Sans KR", sans-serif`, // 가독성 높은 한글 폰트
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
});

export default theme;
