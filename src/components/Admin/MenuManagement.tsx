
import React, { useState } from 'react';
import { Plus, Edit, Trash2, Upload, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useMenu, MenuItem } from '@/contexts/MenuContext';

const MenuManagement = () => {
  const { menuItems, loading, addMenuItem, updateMenuItem, deleteMenuItem } = useMenu();
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [editForm, setEditForm] = useState<Partial<MenuItem>>({});

  const handleEdit = (item: MenuItem) => {
    setIsEditing(item.id);
    setEditForm(item);
  };

  const handleAdd = () => {
    setIsAdding(true);
    setEditForm({
      name: '',
      description: '',
      price: 0,
      category: 'Main',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      available: true
    });
  };

  const handleSave = async () => {
    try {
      if (isAdding) {
        await addMenuItem(editForm as Omit<MenuItem, 'id'>);
        setIsAdding(false);
      } else if (isEditing) {
        await updateMenuItem(isEditing, editForm);
        setIsEditing(null);
      }
      setEditForm({});
    } catch (error) {
      console.error('Error saving menu item:', error);
    }
  };

  const handleCancel = () => {
    setIsEditing(null);
    setIsAdding(false);
    setEditForm({});
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this menu item?')) {
      try {
        await deleteMenuItem(id);
      } catch (error) {
        console.error('Error deleting menu item:', error);
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditForm({ ...editForm, image: imageUrl });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-lg">Loading menu items...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Menu Management</h2>
        <Button onClick={handleAdd} className="bg-gamboge hover:bg-rosso">
          <Plus size={16} className="mr-2" />
          Add Menu Item
        </Button>
      </div>

      {/* Add/Edit Form */}
      {(isAdding || isEditing) && (
        <div className="bg-card border rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold">
            {isAdding ? 'Add New Menu Item' : 'Edit Menu Item'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={editForm.name || ''}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Menu item name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Price (₦)</label>
              <input
                type="number"
                step="0.01"
                value={editForm.price || ''}
                onChange={(e) => setEditForm({ ...editForm, price: Number(e.target.value) })}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="0.00"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                value={editForm.category || 'Main'}
                onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="Main">Main</option>
                <option value="Bowls">Bowls</option>
                <option value="Grilled">Grilled</option>
                <option value="Snacks">Snacks</option>
                <option value="Combos">Combos</option>
                <option value="Sides">Sides</option>
                <option value="Beverages">Beverages</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="url"
                value={editForm.image || ''}
                onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={editForm.description || ''}
              onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
              className="w-full px-3 py-2 border rounded-md"
              rows={3}
              placeholder="Menu item description"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="available"
              checked={editForm.available || false}
              onChange={(e) => setEditForm({ ...editForm, available: e.target.checked })}
              className="rounded"
            />
            <label htmlFor="available" className="text-sm font-medium">Available</label>
          </div>
          
          <div className="flex space-x-3">
            <Button onClick={handleSave} className="bg-freshness hover:bg-freshness/80">
              <Save size={16} className="mr-2" />
              Save
            </Button>
            <Button onClick={handleCancel} variant="outline">
              <X size={16} className="mr-2" />
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Menu Items Table */}
      <div className="bg-card border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {menuItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="h-12 w-12 object-cover rounded"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9';
                    }}
                  />
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="max-w-xs truncate">{item.description}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>₦{item.price.toLocaleString()}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    item.available 
                      ? 'bg-freshness text-white' 
                      : 'bg-gray-500 text-white'
                  }`}>
                    {item.available ? 'Available' : 'Unavailable'}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleEdit(item)}
                      size="sm"
                      variant="outline"
                    >
                      <Edit size={14} />
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MenuManagement;
