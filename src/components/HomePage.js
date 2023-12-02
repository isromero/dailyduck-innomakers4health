import "./HomePage.css";
import React, { useCallback, useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ChatComponent from './ChatComponent';

import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
} from "react-flow-renderer";
import "reactflow/dist/style.css";

import grassBackground from "../img/grass.png";

const BackgroundFlow = ({ children }) => {
  const flowContainerStyle = {
    width: "100%",
    height: "100vh",
    position: "relative",
    backgroundImage: `url('${grassBackground}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return <div style={flowContainerStyle}>{children}</div>;
};

const PersonNode = ({ data, isConnectable }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const importImage = async () => {
      try {
        const module = await import(`../img/duck.gif`);
        setImageSrc(module.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    importImage();
  }, []);

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div style={{ textAlign: "center" }}>
        <img src={imageSrc} alt="Paciente" style={{ width: "10rem" }} />
        <p>{data.label}</p>
      </div>
    </>
  );
};

const CompletedHabitNode = ({ data, isConnectable }) => {
    const [imageSrc, setImageSrc] = useState(null);
  
    useEffect(() => {
      const importImage = async () => {
        try {
          const module = await import(`../img/charquito.gif`);
          setImageSrc(module.default);
        } catch (error) {
          console.error("Error loading image:", error);
        }
      };
  
      importImage();
    }, []);
  
    return (
      <>
        <Handle
          type="target"
          position={Position.Top}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
        />
        <div style={{ textAlign: "center" }}>
          <img src={imageSrc} alt="Hábito completado" style={{ width: "8rem" }} />
          <p>{data.label}</p>
        </div>
        <Handle
          type="source"
          position={Position.Bottom}
          isConnectable={isConnectable}
        />
      </>
    );
  };
  
const nodeTypes = {
  customImg: PersonNode,
  customBigCircle: CompletedHabitNode,
};

const FlowChart = () => {
  const initialNodes = [
    {
      id: "1",
      position: {
        x: window.innerWidth / 3 + 150,
        y: window.innerHeight - 4600,
      },
      data: { label: "15" },
      type: "customBigCircle",
    },
    {
      id: "2",
      position: {
        x: window.innerWidth / 3 - 150,
        y: window.innerHeight - 4300,
      },
      data: { label: "14" },
      type: "customBigCircle",
    },
    {
      id: "3",
      position: {
        x: window.innerWidth / 3 + 150,
        y: window.innerHeight - 4000,
      },
      data: { label: "13" },
      type: "customBigCircle",
    },
    {
      id: "4",
      position: {
        x: window.innerWidth / 3 - 150,
        y: window.innerHeight - 3700,
      },
      data: { label: "12" },
      type: "customBigCircle",
    },
    {
      id: "5",
      position: {
        x: window.innerWidth / 3 + 150,
        y: window.innerHeight - 3400,
      },
      data: { label: "11" },
      type: "customBigCircle",
    },
    {
      id: "6",
      position: {
        x: window.innerWidth / 3 - 150,
        y: window.innerHeight - 3100,
      },
      data: { label: "10" },
      type: "customBigCircle",
    },
    {
      id: "7",
      position: {
        x: window.innerWidth / 3 + 150,
        y: window.innerHeight - 2900,
      },
      data: { label: "9" },
      type: "customBigCircle",
    },
    {
      id: "8",
      position: {
        x: window.innerWidth / 3 - 150,
        y: window.innerHeight - 2600,
      },
      data: { label: "8" },
      type: "customBigCircle",
    },
    {
      id: "9",
      position: {
        x: window.innerWidth / 3 + 150,
        y: window.innerHeight - 2300,
      },
      data: { label: "7" },
      type: "customBigCircle",
    },
    {
      id: "10",
      position: {
        x: window.innerWidth / 3 - 150,
        y: window.innerHeight - 2000,
      },
      data: { label: "Meditar 10 minutos al día" },
      type: "customBigCircle",
    },
    {
      id: "11",
      position: {
        x: window.innerWidth / 3 + 150,
        y: window.innerHeight - 1700,
      },
      data: { label: "Reducir a 1h el uso del móvil" },
      type: "customBigCircle",
    },
    {
      id: "12",
      position: {
        x: window.innerWidth / 3 - 150,
        y: window.innerHeight - 1400,
      },
      data: { label: "35 minutos actividad física diaria" },
      type: "customBigCircle",
    },
    {
      id: "13",
      position: {
        x: window.innerWidth / 3 + 150,
        y: window.innerHeight - 1100,
      },
      data: { label: "Practicar método respiración Wim Hof" },
      type: "customBigCircle",
    },
    {
      id: "14",
      position: {
        x: window.innerWidth / 3 - 150,
        y: window.innerHeight - 800,
      },
      data: { label: "Reducir consumo de kcal de 2000 a 1600" },
      type: "customBigCircle",
    },
    {
      id: "15",
      position: {
        x: window.innerWidth / 3 + 150,
        y: window.innerHeight - 500,
      },
      data: { label: "20 minutos actividad física diaria"},
      type: "customBigCircle",
    },
    {
      id: "16",
      position: {
        x: window.innerWidth / 3 - 50,
        y: window.innerHeight - 150,
      },
      data: { imageSrc: "../../img/duck.gif", animated: true },
      type: "customImg",
    },
  ];

  const initialEdges = [
    { id: "e1-2", source: "1", target: "2", style: { stroke: "white" } },
    { id: "e2-3", source: "2", target: "3", style: { stroke: "white" } },
    { id: "e3-4", source: "3", target: "4", style: { stroke: "white" } },
    { id: "e4-5", source: "4", target: "5", style: { stroke: "white" } },
    { id: "e5-6", source: "5", target: "6", style: { stroke: "white" } },
    { id: "e6-7", source: "6", target: "7", style: { stroke: "white" } },
    { id: "e7-8", source: "7", target: "8", style: { stroke: "white" } },
    { id: "e8-9", source: "8", target: "9", style: { stroke: "white" } },
    { id: "e9-10", source: "9", target: "10", style: { stroke: "white" } },
    { id: "e10-11", source: "10", target: "11", style: { stroke: "white" } },
    { id: "e11-12", source: "11", target: "12", style: { stroke: "white" } },
    { id: "e12-13", source: "12", target: "13", style: { stroke: "white" }},
    { id: "e13-14", source: "13", target: "14", style: { stroke: "white" } },
    { id: "e14-15", source: "14", target: "15", style: { stroke: "white" } },
    { id: "e15-16", source: "15", target: "16", animated: true, style: { stroke: "white" } },
  ];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      />
    </div>
  );
};



const HomePage = () => {
  const [showChat, setShowChat] = useState(false);

  // Función para manejar el clic en el chat
  const handleChatClick = () => {
    setShowChat(true);
  };

  // Función para cerrar el chat
  const handleCloseChat = () => {
    setShowChat(false);
  };

  useEffect(() => {
    // Lógica para cargar mensajes iniciales, si es necesario
    // Puedes cargar mensajes iniciales aquí
  }, []); // Asegúrate de proporcionar un arreglo de dependencias vacío para que el efecto se ejecute solo una vez

  return (
    <div className="fullPage">
      <Sidebar />
      <BackgroundFlow backgroundImage={grassBackground}>
        <FlowChart />
      </BackgroundFlow>
  
      {/* Añade una nueva capa para el chat */}
      {showChat && (
        <div style={{ position: 'fixed', bottom: 0, right: 0, zIndex: 9999 }}>
          <ChatComponent
            onCloseChat={handleCloseChat}
            // Pasa cualquier otra prop que sea necesaria, como mensajes iniciales
          />
        </div>
      )}
  
      <div className="dialog-chat" onClick={handleChatClick}>
        <p>Chatea con Ducky la IA sanitaria</p>
      </div>
      <div className="dialog-chat2"></div>
      <img src={require('../img/chat_icon.png')} className="chat-icon" alt="chat-icon" onClick={handleChatClick}/>
    </div>
  );
};

export default HomePage;