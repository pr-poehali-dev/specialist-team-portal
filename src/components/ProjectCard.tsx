import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  budget: string;
  deadline: string;
  teamSize: number;
  categories: string[];
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  description,
  budget,
  deadline,
  teamSize,
  categories,
  onClick,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> {deadline}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" /> {teamSize} специалистов
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="font-medium">{budget}</div>
        <Button onClick={onClick}>Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
