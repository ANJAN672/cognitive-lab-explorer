
import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Image, Layout, FileJson, ArrowDownToLine, Play } from "lucide-react";

export const OfferSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Node class for network animation
    class Node {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      size: number;
      speed: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.targetX = x;
        this.targetY = y;
        this.size = 4;
        this.speed = 0.05;
      }

      update() {
        this.x += (this.targetX - this.x) * this.speed;
        this.y += (this.targetY - this.y) * this.speed;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#8B5CF6';
        ctx.fill();
      }
    }

    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = 50;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();

        // Draw connections
        nodes.forEach(otherNode => {
          const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${1 - distance / 100})`;
            ctx.stroke();
          }
        });
      });

      // Randomly update target positions
      if (Math.random() < 0.01) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        randomNode.targetX = Math.random() * canvas.width;
        randomNode.targetY = Math.random() * canvas.height;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  const services = [
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Document Processing",
      description: "Advanced NLP for structured data extraction"
    },
    {
      icon: <Image className="w-10 h-10 text-primary" />,
      title: "Image Analysis",
      description: "Computer vision powered insights"
    },
    {
      icon: <Layout className="w-10 h-10 text-primary" />,
      title: "Web Processing",
      description: "Automated web data extraction"
    },
    {
      icon: <FileJson className="w-10 h-10 text-primary" />,
      title: "JSON Processing",
      description: "Structured data transformation"
    },
    {
      icon: <ArrowDownToLine className="w-10 h-10 text-primary" />,
      title: "Data Export",
      description: "Flexible export formats"
    },
    {
      icon: <Play className="w-10 h-10 text-primary" />,
      title: "Media Processing",
      description: "Audio and video analysis"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-20"
      />
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What We Offer</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your data processing capabilities with our cutting-edge cognitive solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 bg-background/50 backdrop-blur border-primary/10">
              <CardContent className="p-6">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
