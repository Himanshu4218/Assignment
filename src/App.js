import React, { useState } from "react";
import "./App.css";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  Container,
} from "@mui/material";
import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { month: "Feb", historical: 4, current: 5, prediction: null },
  { month: "Mar", historical: 11, current: 10.5, prediction: null },
  { month: "April", historical: 12, current: 11, prediction: 11 },
  { month: "June", historical: 13, current: null, prediction: 13 },
  { month: "July", historical: 14, current: null, prediction: 15 },
  { month: "August", historical: 15, current: null, prediction: 17 },
  { month: "September", historical: 16, current: null, prediction: 19 },
  { month: "October", historical: 17, current: null, prediction: 21 },
];

const App = () => {
  const [Date, setDate] = useState("");
  const [Prediction, setPrediction] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  return (
    <div>
      <div class="topnav">
        <a class="active" href="#home">Dashboard</a>
      </div>
      <Container>
            <Card className="card">
              <CardContent>
                <Typography variant="h6">Scorecard 1</Typography>
                <Typography variant="body1">Score: 17</Typography>
                <Typography variant="body2">Additional information</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">Learn More</Button>
              </CardActions>
            </Card>
            <Card className="card">
              <CardContent>
                <Typography variant="h6">Scorecard 2</Typography>
                <Typography variant="body1">Score: 11</Typography>
                <Typography variant="body2">Additional information</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">Learn More</Button>
              </CardActions>
            </Card>
      </Container>
      <Container>
        <Card className="graph">
          <Typography variant="h6" marginLeft={1}>Graph</Typography>
          <LineChart width={700} height={350} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="current"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Line type="monotone" dataKey="historical" stroke="#82ca9d" />
            <Line
              type="monotone"
              dataKey="prediction"
              stroke="#8884d8"
              strokeDasharray="3 3"
            />
          </LineChart>
        </Card>
        <Card className="table">
          <Typography variant="h6">Table</Typography>
          <FormControl>
            <TextField
              className="text"
              type="Date"
              size="small"
              value={Date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              className="text"
              label="Prediction"
              size="small"
              value={Prediction}
              onChange={(e) => setPrediction(e.target.value)}
            />
          </FormControl>
          <TableContainer component={Paper} style={{ maxHeight: 270 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Prediction</TableCell>
                  <TableCell>Historical</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.month}>
                    <TableCell>{row.month}</TableCell>
                    <TableCell>{row.prediction}</TableCell>
                    <TableCell>{row.historical}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </div>
  );
};

export default App;
