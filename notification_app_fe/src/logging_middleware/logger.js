import axios from "axios";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2JxMWExMjE5QHZ2aXQubmV0IiwiZXhwIjoxNzgwNjM3MTA2LCJpYXQiOjE3ODA2MzYyMDYsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJiYmNhNjM0NS01ZGE0LTRlZmUtYmFkYy1mNTk2ZjNjZDc5NDgiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJjaGlsYWthIG15bmUiLCJzdWIiOiIxMjYxOTJkZC03ZGU5LTQ3YjAtYTg2YS04MzFmZTIzZDRlZWQifSwiZW1haWwiOiIyM2JxMWExMjE5QHZ2aXQubmV0IiwibmFtZSI6ImNoaWxha2EgbXluZSIsInJvbGxObyI6IjIzYnExYTEyMTkiLCJhY2Nlc3NDb2RlIjoiUVFkRVl5IiwiY2xpZW50SUQiOiIxMjYxOTJkZC03ZGU5LTQ3YjAtYTg2YS04MzFmZTIzZDRlZWQiLCJjbGllbnRTZWNyZXQiOiJVTnNteVFQTW5ZWlhtUFlIIn0.l3brF03OvYGCPHQq4I2wgDdKXxQ7ylm7VAXTJhb9r8M";

export async function Log(stack, level, pkg, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Logging failed:", error);
  }
}