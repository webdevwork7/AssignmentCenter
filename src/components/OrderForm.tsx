
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { siteConfig } from '@/config/site';
import { Calculator, ArrowRight, Phone, Plus, Minus } from 'lucide-react';

const OrderForm = () => {
  const [assignmentType, setAssignmentType] = useState('');
  const [academicLevel, setAcademicLevel] = useState('');
  const [deadline, setDeadline] = useState('');
  const [pages, setPages] = useState(1);
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    if (!assignmentType || !academicLevel || !deadline || !pages) {
      setPrice(0);
      return;
    }

    const assignment = siteConfig.assignmentTypes.find(a => a.name === assignmentType);
    const level = siteConfig.academicLevels.find(l => l.name === academicLevel);
    const deadlineData = siteConfig.deadlines.find(d => d.name === deadline);

    if (assignment && level && deadlineData) {
      const basePrice = assignment.basePrice;
      const levelMultiplier = level.multiplier;
      const deadlineMultiplier = deadlineData.multiplier;
      const totalPrice = Math.round(basePrice * levelMultiplier * deadlineMultiplier * pages);
      setPrice(totalPrice);
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [assignmentType, academicLevel, deadline, pages]);

  const incrementPages = () => setPages(prev => prev + 1);
  const decrementPages = () => setPages(prev => Math.max(1, prev - 1));
  const handlePagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setPages(Math.max(1, value));
  };

  return (
    <div className="relative">
      <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 rainbow-border p-1 w-full">
        <div className="bg-white rounded-lg">
          <CardHeader className="text-center pb-4 pt-6 px-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">Get Instant Quote</CardTitle>
            <p className="text-gray-600 text-sm">Fill the form to get real-time pricing</p>
          </CardHeader>
          
          <CardContent className="space-y-4 px-6 pb-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Assignment Type</Label>
              <Select value={assignmentType} onValueChange={setAssignmentType}>
                <SelectTrigger className="h-10 text-sm">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {siteConfig.assignmentTypes.map((type) => (
                    <SelectItem key={type.name} value={type.name}>{type.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Academic Level</Label>
              <Select value={academicLevel} onValueChange={setAcademicLevel}>
                <SelectTrigger className="h-10 text-sm">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  {siteConfig.academicLevels.map((level) => (
                    <SelectItem key={level.name} value={level.name}>{level.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Deadline</Label>
              <Select value={deadline} onValueChange={setDeadline}>
                <SelectTrigger className="h-10 text-sm">
                  <SelectValue placeholder="Select deadline" />
                </SelectTrigger>
                <SelectContent>
                  {siteConfig.deadlines.map((d) => (
                    <SelectItem key={d.name} value={d.name}>{d.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Number of Pages</Label>
              <div className="flex items-center space-x-3">
                <Button 
                  type="button"
                  variant="outline" 
                  size="sm" 
                  onClick={decrementPages}
                  className="h-10 w-10 p-0 flex-shrink-0"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  min="1"
                  value={pages}
                  onChange={handlePagesChange}
                  className="h-10 text-center text-sm font-medium"
                />
                <Button 
                  type="button"
                  variant="outline" 
                  size="sm" 
                  onClick={incrementPages}
                  className="h-10 w-10 p-0 flex-shrink-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {price > 0 && (
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white text-center">
                <div className="text-2xl font-bold">${price}</div>
                <div className="text-sm opacity-90">Total estimated price</div>
              </div>
            )}
            
            <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 text-sm font-semibold">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default OrderForm;
