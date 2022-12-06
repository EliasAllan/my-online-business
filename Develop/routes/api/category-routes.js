const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    // find all categories
  try {
    const userData = await Category.findAll();
    console.log(userData)
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }

  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  
  try {
    const userData = await Category.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }

  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category

  Category.create({
    id: req.body.id,
    category_name: req.body.category_name
 })

  .then((newCategory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  })
});

router.put('/:id', async (req, res) => {
    // update a category by its `id` value
  try{
    // be specific about which datapoints to grab
    const {category_name} = req.body;
    // put validation... add values
    const result = await Category.update(
    {category_name}, 
    {
      where: {
        // :id is basically which to update
        id: req.params.id
      }
    });
    res.json(result);
  }
  catch(err){
    res.status(404).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
