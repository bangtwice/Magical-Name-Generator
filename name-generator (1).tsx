import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const NameGenerator = () => {
  const [generatedName, setGeneratedName] = useState('');
  const [nameType, setNameType] = useState('fantasy');

  const nameTypes = {
    fantasy: {
      prefixes: ['Aer', 'Zeph', 'Thal', 'Drak', 'Cel', 'Fae', 'Nyx', 'Syl', 'Kel', 'Vor'],
      suffixes: ['ius', 'or', 'ana', 'yn', 'ira', 'eth', 'yr', 'is', 'on', 'ix']
    },
    scifi: {
      prefixes: ['Neo', 'Zex', 'Quan', 'Vex', 'Cy', 'Ax', 'Tron', 'Rix', 'Sol', 'Star'],
      suffixes: ['ex', 'on', 'ar', 'ix', 'os', 'oid', 'ax', 'ion', 'or', 'ux']
    },
    medieval: {
      prefixes: ['Ald', 'Gar', 'Thor', 'Bran', 'Ed', 'Rod', 'Wil', 'Ber', 'God', 'Os'],
      suffixes: ['ric', 'wald', 'mund', 'win', 'fred', 'bert', 'gar', 'mar', 'wine', 'thur']
    }
  };

  const generateName = () => {
    const { prefixes, suffixes } = nameTypes[nameType];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    setGeneratedName(prefix + suffix);
  };

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4">
      <Card className="w-96 bg-white/90 backdrop-blur">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl" style={{ fontFamily: 'Bodoni Poster, serif' }}>
            Mystical Name Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" style={{ fontFamily: 'Bodoni Poster, serif' }}>
              Choose Your Realm
            </label>
            <Select value={nameType} onValueChange={setNameType}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select name type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fantasy">Fantasy</SelectItem>
                <SelectItem value="scifi">Sci-Fi</SelectItem>
                <SelectItem value="medieval">Medieval</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            onClick={generateName}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            Generate Name
          </Button>

          {generatedName && (
            <div className="mt-4 p-6 bg-purple-50 rounded-lg border border-purple-200">
              <p 
                className="text-center text-2xl text-purple-800"
                style={{ fontFamily: 'Bodoni Poster, serif' }}
              >
                {generatedName}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NameGenerator;
